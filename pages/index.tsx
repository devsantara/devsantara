import type { NextPage } from 'next';
import clsx from 'clsx';

// components
import { Navbar } from '@/components/Navbar';
import { Header } from '@/components/Header';
import { Card } from '@/components/Card';
import { Container } from '@/components/Container';
import { Img } from '@/components/Img';
import { Paragraph } from '@/components/Paragraph';
import { Footer } from '@/components/Footer';

const features = [
  {
    id: 1,
    title: 'Devsantara Communities',
    image: '/icons/feature-communities.svg',
    description:
      'Berjumpa dengan teman teman yang memiliki tujuan yang sama seperti kamu, bangun jaringan dengan mereka',
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
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Header />
      <main className="flex-1">
        <Container>
          <div className="relative grid grid-cols-1 gap-x-5 gap-y-3 xl:mt-16 xl:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={feature.id}
                className={clsx(
                  'px-5 py-7 text-center sm:px-20 lg:px-60 xl:p-9',
                  {
                    'relative xl:-top-16': index === 1,
                  }
                )}
              >
                <Img
                  src={feature.image}
                  alt="communities"
                  className="mx-auto mb-2 h-8 w-8 lg:h-12 lg:w-12"
                />
                <h2 className="mb-2 text-lg font-medium text-primary lg:text-xl">
                  {feature.title}
                </h2>
                <Paragraph>{feature.description}</Paragraph>
              </Card>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
