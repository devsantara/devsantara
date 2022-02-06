import { GetStaticPaths, GetStaticPropsContext, NextPage } from 'next';
import path from 'path';
import moment from 'moment';

import { getContentData, readDir } from '@/utils';
import { MatterResult } from '@/types';
import { academyBasePath } from '@/constants';

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
import { AppHead } from '@/components/AppHead';

interface Props extends MatterResult {
  lastUpdate: string;
  academyModules: MatterResult[];
}

const AcademyModule: NextPage<Props> = ({
  title,
  description,
  preview,
  theme,
  academyModules,
  lastUpdate,
  keywords,
}) => {
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
        <Header className="grid grid-cols-1 gap-x-8 pt-6 md:grid-cols-[auto,1fr,auto] xl:grid-cols-[auto,1fr,auto]">
          <div
            style={{ backgroundColor: theme }}
            className="flex justify-center rounded-lg p-7"
          >
            <Img src={preview} alt={`${title} academy`} className="h-20 w-20" />
          </div>
          <div className="flex flex-col gap-y-1">
            <Title className="max-w-4xl text-left">
              {title} <Highlight>Academy</Highlight>
            </Title>
            <Paragraph className="max-w-lg text-left lg:max-w-lg">
              {description}
            </Paragraph>
          </div>
          <div>
            <Stats
              lastUpdate={lastUpdate ? moment(lastUpdate).fromNow() : '-'}
              moduleLength={academyModules.length}
            />
          </div>
        </Header>

        <Main>
          <Container>
            <ul className="flex flex-col gap-y-3">
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
    </>
  );
};

interface Context extends GetStaticPropsContext {
  params: {
    academy: string;
  };
}

export const getStaticProps = async ({ params }: Context) => {
  const { academy } = params;

  const academyContent = await getContentData(
    path.join(academyBasePath, academy, 'index.md')
  );

  const academyModules = await readDir(path.join(academyBasePath, academy), {
    exclude: 'index.md',
  });

  const academyModulesContent = await Promise.all(
    academyModules.map(async (module) => {
      return getContentData(path.join(academyBasePath, academy, module));
    })
  );

  const lastUpdate =
    academyModulesContent.sort((a: MatterResult, b: MatterResult) => {
      return moment(b.lastmod).unix() - moment(a.lastmod).unix();
    })[0]?.lastmod || null;

  const ascAcademyModules = academyModulesContent.sort(
    (a, b) => a.order - b.order
  );

  return {
    props: {
      ...academyContent,
      lastUpdate,
      academyModules: ascAcademyModules,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const academies = await readDir(academyBasePath, {
    exclude: 'index.md',
  });

  const paths = academies.map((academy) => {
    return { params: { academy } };
  });

  return { paths, fallback: false };
};

export default AcademyModule;
