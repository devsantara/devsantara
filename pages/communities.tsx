import { NextPage } from 'next';

// components
import { Header } from '@/components/Header';
import { Highlight } from '@/components/Highlight';
import { Navbar } from '@/components/Navbar';
import { Paragraph } from '@/components/Paragraph';
import { Screen } from '@/components/Screen';
import { Title } from '@/components/Title';

const Communities: NextPage = () => {
  return (
    <Screen>
      <Navbar />
      <Header>
        <Title className="max-w-4xl">
          DEVSANTARA <Highlight>COMMUNITIES</Highlight>
        </Title>
        <Paragraph className="md:max-w-lg lg:max-w-2xl">
          Berjumpa dengan teman teman yang memiliki tujuan yang sama seperti
          kamu, bangun jaringan dengan mereka
        </Paragraph>
      </Header>
    </Screen>
  );
};

export default Communities;
