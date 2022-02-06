import { NextPage } from 'next';

// components
import { Header } from '@/components/Header';
import { Highlight } from '@/components/Highlight';
import { Navbar } from '@/components/Navbar';
import { Paragraph } from '@/components/Paragraph';
import { Screen } from '@/components/Screen';
import { Title } from '@/components/Title';
import { AppHead } from '@/components/AppHead';

const About: NextPage = () => {
  return (
    <>
      <AppHead />
      <Screen>
        <Navbar />
        <Header>
          <Title className="max-w-4xl">
            DEVSANTARA <Highlight>ABOUT US</Highlight>
          </Title>
          <Paragraph className="md:max-w-lg lg:max-w-2xl">
            Tempat Belajar dan Berkomunitas bagi Developer Indonesia
          </Paragraph>
        </Header>
      </Screen>
    </>
  );
};

export default About;
