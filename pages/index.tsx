import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="grid h-screen place-content-center">
      <figure className="relative mx-auto mb-2 h-10 w-10">
        <Image
          src="/brand/devsantara-logo.svg"
          layout="fill"
          alt="Devsantara"
        />
      </figure>
      <h1 className="text-center text-2xl font-semibold text-primary">
        Devsantara
      </h1>
      <p className="text-xs font-light text-black">
        Next JS, Typescript, TailwindCSS
      </p>
    </div>
  );
};

export default Home;
