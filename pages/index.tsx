import type { NextPage } from 'next';
import Image from 'next/image';

// components
import { Title } from '@/components/Title';
import { Paragraph } from '@/components/Paragraph';

const Home: NextPage = () => {
  return (
    <div className="grid h-screen place-content-center text-center">
      <figure className="relative mx-auto mb-2 h-10 w-10">
        <Image
          src="/brand/devsantara-logo.svg"
          layout="fill"
          alt="Devsantara"
        />
      </figure>
      <Title>Devsantara</Title>
      <Paragraph>Next JS, Typescript, TailwindCSS</Paragraph>
    </div>
  );
};

export default Home;
