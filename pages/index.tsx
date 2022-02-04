import type { NextPage } from 'next';
import clsx from 'clsx';
import Link from 'next/link';

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

const features = [
  {
    id: 1,
    title: 'Devsantara Communities',
    image: '/icons/feature-communities.svg',
    description:
      'Berjumpa dengan teman teman yang memiliki tujuan yang sama seperti kamu, bangun jaringan dengan mereka',
    url: '/communities',
  },
  {
    id: 2,
    title: 'Devsantara Academy',
    image: '/icons/feature-academy.svg',
    description:
      'Pelajari skill teknologi kamu dengan media text yang akan mempercepat skill kamu di banding media video.',
    url: '/academy',
  },
  {
    id: 3,
    title: 'Devsantara Resourses',
    image: '/icons/feature-resourses.svg',
    description:
      'Temukan sumber daya pembelajaran kamu di sini yang membantu kamu berkembang lebih cepat',
    url: '/resourses',
  },
];

const Home: NextPage = () => {
  return (
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
              <Card
                key={feature.id}
                className={clsx(
                  'px-5 py-7 text-center sm:px-20 lg:px-60 xl:p-9',
                  {
                    'relative -order-1 xl:-top-16 xl:order-none': index === 1,
                  }
                )}
              >
                <Img
                  src={feature.image}
                  alt="communities"
                  className="mx-auto mb-2 h-8 w-8 lg:h-12 lg:w-12"
                />
                <Link href={feature.url}>
                  <a>
                    <h2 className="mb-2 text-lg font-medium text-primary lg:text-xl">
                      {feature.title}
                    </h2>
                  </a>
                </Link>
                <Paragraph>{feature.description}</Paragraph>
              </Card>
            ))}
          </div>
        </Container>
      </Main>
      <Footer />
    </Screen>
  );
};

export default Home;
