import matter from 'gray-matter';
import { GetStaticPropsContext, NextPage } from 'next';
import path from 'path';

import { readDir, readFile } from '@/utils';
import { MatterMeta } from '@/types';

interface Props extends MatterMeta {}

const Module: NextPage<Props> = ({ title }) => {
  return <div>{title}</div>;
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
  const matterMeta = matter(moduleFile).data;

  return {
    props: {
      ...matterMeta,
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
