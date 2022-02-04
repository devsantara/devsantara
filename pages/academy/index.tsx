import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import matter from 'gray-matter';
import path from 'path';

import { readDir, readFile } from '@/utils';

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

interface Props {
  date: string;
  description: string;
  draf: boolean;
  keywords: string[];
  lastMod: string;
  preview: string;
  slug: string;
  title: string;
  theme: string;
  academyList: Props[];
}

const Academy: NextPage<Props> = ({ title, description, academyList }) => {
  const splitTitle = title.split(' ');
  return (
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
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {academyList.map((academy) => (
              <Card
                key={academy.title}
                className="grid grid-cols-1 grid-rows-[auto,1fr] gap-y-4"
              >
                <div
                  style={{ backgroundColor: academy.theme }}
                  className="grid h-44 place-content-center rounded-xl"
                >
                  <Img
                    src={academy.preview}
                    alt={academy.title}
                    className=" aspect-square h-20"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <Link href={academy.slug}>
                    <a>
                      <h2 className="mb-2 text-lg font-bold text-primary lg:text-xl">
                        {academy.title} ACADEMY
                      </h2>
                    </a>
                  </Link>

                  <div>
                    <Stats moduleLength={32} estimatedTime={10} />

                    <Paragraph size="small">{academy.description}</Paragraph>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Main>
      <Footer />
    </Screen>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const base = 'contents/academy';

  const main = await readFile(path.join(base, 'index.md'));
  const academyList = await readDir(base, {
    exclude: 'index.md',
  });

  const academyListFilePromise = academyList.map(async (academy) => {
    const file = await readFile(path.join(base, academy, 'index.md'));
    return matter(file).data;
  });

  const academyListData = await Promise.all(academyListFilePromise);

  const matterMeta = matter(main).data;

  return {
    props: {
      ...matterMeta,
      academyList: academyListData.sort((a, b) => a.order - b.order),
    },
  };
};

export default Academy;
