import { GetStaticPropsContext, NextPage } from 'next';
import matter from 'gray-matter';
import path from 'path';
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';

import { MatterMeta } from '@/types';
import { readDir, readFile } from '@/utils';

// components
import { Screen } from '@/components/Screen';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Main } from '@/components/Main';
import { Container } from '@/components/Container';
import { SideBar } from '@/components/SideBar';
import { Content } from '@/components/Content';

interface Props extends MatterMeta {
  academyModules: MatterMeta[];
}

const Module: NextPage<Props> = ({
  title,
  theme,
  preview,
  academyModules,
  content,
  slug,
}) => {
  const academySlug = slug.split('/').slice(0, -1).join('/');

  return (
    <Screen>
      <Navbar />
      <Main>
        <Container>
          <div className="mt-16 grid grid-cols-1 gap-x-5 xl:grid-cols-[280px,1fr]">
            <SideBar
              theme={theme}
              preview={preview}
              academyModules={academyModules}
              academySlug={academySlug}
              className="sticky top-20 hidden h-fit xl:block"
            />
            <Content title={title} content={content} />
          </div>
        </Container>
      </Main>
      <Footer />
    </Screen>
  );
};

interface Context extends GetStaticPropsContext {
  params: {
    academy: string;
    module: string;
  };
}

export const getStaticProps = async ({ params }: Context) => {
  const { academy, module } = params;
  const basePath = 'contents/academy';

  const moduleFile = await readFile(
    path.join(basePath, academy, `${module}.md`)
  );

  const academyModulesFile = await readDir(path.join(basePath, academy), {
    exclude: 'index.md',
  });

  const academyModulesPromises = academyModulesFile.map(async (module) => {
    const file = await readFile(path.join(basePath, academy, module));
    return matter(file).data;
  });

  const academyModules = await Promise.all(academyModulesPromises);

  const matterResult = matter(moduleFile);
  const matterMeta = matterResult.data;
  const matterContent = matterResult.content;

  const md = new MarkdownIt({
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(str, { language: lang }).value;
        } catch (__) {}
      }

      return '';
    },
  });

  return {
    props: {
      ...matterMeta,
      content: md.render(matterContent),
      academyModules,
    },
  };
};

export const getStaticPaths = async () => {
  const basePath = 'contents/academy';

  const academies = await readDir(basePath, { exclude: 'index.md' });

  const modulesPromise = academies.map(async (academy) => {
    const modules = await readDir(path.join(basePath, academy), {
      exclude: 'index.md',
    });

    return modules.map((module) => ({
      academy,
      module: module.replace('.md', ''),
    }));
  });

  const modules = await Promise.all(modulesPromise);

  const paths = modules.flat().map(({ academy, module }) => {
    return {
      params: { academy, module },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default Module;
