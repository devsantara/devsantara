import { GetStaticPaths, GetStaticPropsContext, NextPage } from 'next';
import path from 'path';
import matter from 'gray-matter';

import { readDir, readFile } from '@/utils';

// components
import { Screen } from '@/components/Screen';
import { Navbar } from '@/components/Navbar';
import { Header } from '@/components/Header';
import { Title } from '@/components/Title';
import { Highlight } from '@/components/Highlight';
import { Paragraph } from '@/components/Paragraph';
import { Main } from '@/components/Main';
import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { Img } from '@/components/Img';
import { Stats } from '@/components/Stats';
import { ModuleList } from '@/components/ModuleList';
import { MatterMeta } from '@/types';
import moment from 'moment';

interface Props extends MatterMeta {
  academyModules: MatterMeta[];
}

const AcademyModule: NextPage<Props> = ({
  title,
  description,
  preview,
  theme,
  academyModules,
  length,
}) => {
  return (
    <Screen>
      <Navbar />
      <Header className="grid grid-cols-1 gap-x-8 md:grid-cols-[auto,1fr,auto] xl:grid-cols-[auto,1fr,auto]">
        <div
          style={{ backgroundColor: theme }}
          className="flex justify-center rounded-lg p-7"
        >
          <Img src={preview} alt={`${title} academy`} className="h-20 w-20" />
        </div>
        <div className="flex flex-col gap-y-1">
          <Title className="max-w-4xl text-left">
            {title} <Highlight>ACADEMY</Highlight>
          </Title>
          <Paragraph className="max-w-lg text-left lg:max-w-lg">
            {description}
          </Paragraph>
        </div>
        <div>
          <Stats
            lastUpdate={moment(academyModules[0]?.lastmod).fromNow()}
            moduleLength={academyModules.length}
          />
        </div>
      </Header>

      <Main>
        <Container>
          <ul>
            {academyModules.map((module) => {
              return (
                <ModuleList
                  key={module.order}
                  title={module.title}
                  order={module.order}
                  lastUpdate={module.lastmod}
                  slug={module.slug}
                />
              );
            })}
          </ul>
        </Container>
      </Main>
      <Footer />
    </Screen>
  );
};

interface Context extends GetStaticPropsContext {
  params: {
    academy: string;
  };
}

export const getStaticProps = async ({ params }: Context) => {
  const { academy } = params;
  const basePath = 'contents/academy';

  const mainFile = await readFile(path.join(basePath, academy, 'index.md'));

  const matterMeta = matter(mainFile).data;

  const academyModulesRaw = await readDir(path.join(basePath, academy), {
    exclude: 'index.md',
  });

  const academyModulesPromise = academyModulesRaw.map(async (module) => {
    const moduleFile = await readFile(path.join(basePath, academy, module));

    return matter(moduleFile).data;
  });

  const academyModules = await Promise.all(academyModulesPromise);

  return {
    props: {
      ...matterMeta,
      academyModules: academyModules.sort((a, b) => a.order - b.order),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const basePath = 'contents/academy';

  const academies = await readDir(basePath, {
    exclude: 'index.md',
  });

  const paths = academies.map((academy) => {
    return { params: { academy } };
  });

  return { paths, fallback: false };
};

export default AcademyModule;
