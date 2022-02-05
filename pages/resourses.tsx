import { NextPage } from 'next';

// components
import { Header } from '@/components/Header';
import { Highlight } from '@/components/Highlight';
import { Navbar } from '@/components/Navbar';
import { Paragraph } from '@/components/Paragraph';
import { Screen } from '@/components/Screen';
import { Title } from '@/components/Title';

const Resourses: NextPage = () => {
  return (
    <Screen>
      <Navbar />
      <Header>
        <Title className="max-w-4xl">
          DEVSANTARA <Highlight>RESOURSES</Highlight>
        </Title>
        <Paragraph className="md:max-w-lg lg:max-w-2xl">
          Temukan sumber daya pembelajaran kamu di sini yang membantu kamu
          berkembang lebih cepat
        </Paragraph>
      </Header>
    </Screen>
  );
};

export default Resourses;
