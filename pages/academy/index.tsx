import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import path from 'path';

import { getContentData, readDir } from '@/utils';
import { MatterResult } from '@/types';
import { academyBasePath } from '@/constants';

// components
import { Card } from '@/components/Card';
import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Highlight } from '@/components/Highlight';
import { Img } from '@/components/Img';
import { Main } from '@/components/Main';
import { Navbar } from '@/components/Navbar';
import { Paragraph } from '@/components/Paragraph';
import { Screen } from '@/components/Screen';
import { Title } from '@/components/Title';
import { Stats } from '@/components/Stats';
import moment from 'moment';
import { AppHead } from '@/components/AppHead';

interface MatterResultWithModuleLength extends MatterResult {
  moduleLength: number;
}

interface Props extends MatterResult {
  academies: MatterResultWithModuleLength[];
}

const Academy: NextPage<Props> = ({
  title,
  description,
  academies,
  keywords,
}) => {
  const splitTitle = title.split(' ');

  return (
    <>
      <AppHead
        title={splitTitle.slice(1).join(' ')}
        description={description}
        keywords={keywords}
      />
      <Screen>
        <Navbar />
        <Header>
          <Title className="max-w-4xl">
            {splitTitle[0]} <Highlight>{splitTitle.slice(1)}</Highlight>
          </Title>
          <Paragraph className="max-w-lg lg:max-w-2xl">{description}</Paragraph>
        </Header>

        <Main>
          <Container>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              {academies.map((academy) => (
                <Link href={academy.slug} key={academy.slug}>
                  <a>
                    <Card className="grid h-full grid-cols-1 grid-rows-[auto,1fr] gap-y-4 rounded-xl xl:rounded-2xl">
                      <div
                        style={{ backgroundColor: academy.theme }}
                        className="grid h-44 place-content-center rounded-xl"
                      >
                        <Img
                          src={academy.preview}
                          alt={academy.title}
                          className="aspect-square h-20"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h2 className="mb-2 text-lg font-bold tracking-wide text-primary lg:text-xl">
                          {academy.title} Academy
                        </h2>

                        <div>
                          <Stats
                            moduleLength={academy.moduleLength}
                            lastUpdate={moment(academy.lastmod).format(
                              'D MMM YYYY'
                            )}
                          />
                          <hr className="my-4 border-gray-light" />
                          <Paragraph>{academy.description}</Paragraph>
                        </div>
                      </div>
                    </Card>
                  </a>
                </Link>
              ))}
            </div>
          </Container>
        </Main>
        <Footer />
      </Screen>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const academyFeature = await getContentData(
    path.join(academyBasePath, 'index.md')
  );

  const academies = await readDir(academyBasePath, { exclude: 'index.md' });

  const academiesContent = await Promise.all(
    academies.map(async (academyDirName) => {
      const academyData = await getContentData(
        path.join(academyBasePath, academyDirName, 'index.md')
      );

      const academyModules = await readDir(
        path.join(academyBasePath, academyDirName),
        { exclude: 'index.md' }
      );

      return { ...academyData, moduleLength: academyModules.length };
    })
  );

  const ascAcademiesContent = academiesContent.sort(
    (a, b) => a.order - b.order
  );

  return {
    props: {
      ...academyFeature,
      academies: ascAcademiesContent,
    },
  };
};

export default Academy;
