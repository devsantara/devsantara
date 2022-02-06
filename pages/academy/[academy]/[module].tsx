import { GetStaticPropsContext, NextPage } from 'next';
import path from 'path';
import clsx from 'clsx';
import { BsGithub } from 'react-icons/bs';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { MatterResult } from '@/types';
import { getContentData, readDir } from '@/utils';
import { academyBasePath, contributeBaseLink } from '@/constants';
import { markdown } from '@/libs';

// components
import { Screen } from '@/components/Screen';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Main } from '@/components/Main';
import { Container } from '@/components/Container';
import { SideBar } from '@/components/SideBar';
import { Content } from '@/components/Content';
import { Button } from '@/components/Button';
import { AppHead } from '@/components/AppHead';

interface Props extends MatterResult {
  academyModules: MatterResult[];
}

const Module: NextPage<Props> = ({
  theme,
  preview,
  academyModules,
  content,
  slug,
  title,
  description,
  keywords,
}) => {
  const academySlug = slug.split('/').slice(0, -1).join('/');
  const currentIndex = academyModules.findIndex(
    (module) => module.slug === slug
  );
  const prevModule = academyModules[currentIndex - 1];
  const nextModule = academyModules[currentIndex + 1];

  const buttonClasses = clsx('px-10 border md:w-fit text-sm rounded-md mb-2');

  return (
    <>
      <AppHead
        title={title}
        description={description}
        keywords={keywords}
        theme={theme}
      />
      <Screen>
        <Navbar />
        <Main>
          <Container>
            <div className="mt-8 grid grid-cols-1 gap-x-6 lg:mt-12 xl:grid-cols-[252px,1fr]">
              <SideBar
                theme={theme}
                preview={preview}
                academyModules={academyModules}
                academySlug={academySlug}
                className="sticky top-24 hidden h-fit xl:block"
              />
              <div>
                <Content content={content} />
                <div className="mt-8 flex flex-col md:flex-row md:justify-between">
                  <Button
                    className={clsx(buttonClasses, 'bg-black text-white')}
                    iconStart={<BsGithub />}
                    target="_blank"
                    href={`${contributeBaseLink}/contents${slug}.md`}
                  >
                    Contribute
                  </Button>
                  <div className="flex flex-col gap-x-4 md:flex-row">
                    {prevModule ? (
                      <Button
                        className={clsx(buttonClasses, 'border-primary')}
                        href={prevModule.slug}
                        title={prevModule.title}
                        iconStart={<IoIosArrowBack />}
                      >
                        Sebelumnya
                      </Button>
                    ) : (
                      <Button
                        className={clsx(buttonClasses, 'border-primary')}
                        href={academySlug}
                        iconStart={<IoIosArrowBack />}
                      >
                        Kembali ke Academy
                      </Button>
                    )}
                    {nextModule ? (
                      <Button
                        className={clsx(buttonClasses, 'bg-primary text-white')}
                        href={nextModule.slug}
                        title={nextModule.title}
                        iconEnd={<IoIosArrowForward />}
                      >
                        Selanjutnya
                      </Button>
                    ) : (
                      <Button
                        className={clsx(buttonClasses, 'bg-primary text-white')}
                        href={academySlug}
                        iconEnd={<IoIosArrowForward />}
                      >
                        Kembali ke Academy
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Main>
        <Footer />
      </Screen>
    </>
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

  const moduleContent = await getContentData(
    path.join(academyBasePath, academy, `${module}.md`)
  );

  const academyModules = await readDir(path.join(academyBasePath, academy), {
    exclude: 'index.md',
  });

  const academyModulesContent = await Promise.all(
    academyModules.map(async (moduleFileName) => {
      return getContentData(
        path.join(academyBasePath, academy, moduleFileName)
      );
    })
  );

  const ascAcademyModules = academyModulesContent.sort(
    (a, b) => a.order - b.order
  );

  return {
    props: {
      ...moduleContent,
      content: markdown.render(moduleContent.content),
      academyModules: ascAcademyModules,
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
