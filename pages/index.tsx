import type { NextPage } from 'next';
import clsx from 'clsx';
import Link from 'next/link';

import { features } from '@/constants';

// components
import { Navbar } from '@/components/Navbar';
import { Header } from '@/components/Header';
import { Card } from '@/components/Card';
import { Container } from '@/components/Container';
import { Img } from '@/components/Img';
import { Paragraph } from '@/components/Paragraph';
import { Footer } from '@/components/Footer';
import { Screen } from '@/components/Screen';
import { Title } from '@/components/Title';
import { Highlight } from '@/components/Highlight';
import { Main } from '@/components/Main';
import { AppHead } from '@/components/AppHead';

const Home: NextPage = () => {
  return (
    <>
      <AppHead />
      <Screen>
        <Navbar />
        <Header>
          <Title className="max-w-4xl">
            TEMPAT <Highlight>BELAJAR</Highlight> DAN{' '}
            <Highlight>BERKOMUNITAS</Highlight> BAGI{' '}
            <Highlight>
              DEVELOPER <u>INDONESIA</u>
            </Highlight>
          </Title>
          <Paragraph className="max-w-lg lg:max-w-2xl">
            Pelajari keterampilan yang sangat dibutuhkan, dan berjumpa dengan
            teman hingga mentor yang berpengalaman di bidangnya
          </Paragraph>
        </Header>
        <Main>
          <Container>
            <div className="relative grid grid-cols-1 gap-x-5 gap-y-3 xl:mt-16 xl:grid-cols-3">
              {features.map((feature, index) => (
                <Link href={feature.url} key={feature.id}>
                  <a
                    className={clsx({
                      'relative -order-1 xl:-top-16 xl:order-none': index === 1,
                    })}
                  >
                    <Card className="rounded-xl px-5 py-7 text-center sm:px-20 lg:px-60 xl:rounded-2xl xl:p-6">
                      <Img
                        src={feature.image}
                        alt="communities"
                        className="mx-auto mb-2 h-8 w-8 lg:h-10 lg:w-10"
                      />

                      <h2 className="mb-2 text-lg font-medium text-primary lg:text-xl">
                        {feature.title}
                      </h2>

                      <Paragraph>{feature.description}</Paragraph>
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

export default Home;
