import type { NextPage } from 'next';

// components
import { Navbar } from '@/components/Navbar';
import { Header } from '@/components/Header';
import { Card } from '@/components/Card';
import { Container } from '@/components/Container';
import { Img } from '@/components/Img';
import { Paragraph } from '@/components/Paragraph';
import clsx from 'clsx';

const features = [
  {
    id: 1,
    title: 'Devsantara Communities',
    image: '/icons/feature-communities.svg',
    description:
      'Berjumpa dengan teman teman yang memiliki tujuan yang sama                seperti kamu, bangun jaringan dengan mereka',
  },
  {
    id: 2,
    title: 'Devsantara Academy',
    image: '/icons/feature-academy.svg',
    description:
      'Pelajari skill teknologi kamu dengan media text yang akan mempercepat skill kamu di banding media video.',
  },
  {
    id: 3,
    title: 'Devsantara Resourses',
    image: '/icons/feature-resourses.svg',
    description:
      'Temukan sumber daya pembelajaran kamu di sini yang membantu kamu berkembang lebih cepat',
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <Container className="relative before:absolute before:right-1/2 before:top-1/2 before:-z-10 before:block before:w-screen before:translate-x-1/2 before:translate-y-1/2 before:border-2 before:border-dashed before:border-primary">
          <div className="relative grid grid-cols-1 gap-5 xl:mt-16 xl:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={feature.id}
                className={clsx(
                  'px-5 py-8 text-center sm:px-20 lg:px-60 xl:p-9',
                  {
                    'relative xl:-top-16': index === 1,
                  }
                )}
              >
                <Img
                  src={feature.image}
                  alt="communities"
                  className="mx-auto mb-2 h-12 w-12"
                />
                <h2 className="mb-2 text-xl font-medium text-primary">
                  {feature.title}
                </h2>
                <Paragraph>{feature.description}</Paragraph>
              </Card>
            ))}
          </div>
        </Container>
      </main>
    </>
  );
};

export default Home;
