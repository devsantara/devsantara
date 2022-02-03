import React, { FC } from 'react';
import { Paragraph } from '@/components/Paragraph';
import { Title } from '@/components/Title';
import { Container } from '@/components/Container';
import { Children } from '@/types';

interface Props {}

const Highlight: FC<{ children: Children }> = ({ children }) => (
  <span className="text-primary">{children}</span>
);

const Header: FC<Props> = () => {
  return (
    <header>
      <Container>
        <div className="flex flex-col items-center gap-y-4 py-16 text-left md:text-center lg:gap-y-5 xl:pt-20 xl:pb-14 xl:text-center">
          <Title className="max-w-4xl">
            TEMPAT <Highlight>BELAJAR</Highlight> DAN{' '}
            <Highlight>BERKOMUNITAS</Highlight> BAGI{' '}
            <Highlight>
              DEVELOPER <u>INDONESIA</u>
            </Highlight>
          </Title>
          <Paragraph className="md:max-w-lg lg:max-w-2xl">
            Pelajari keterampilan yang sangat dibutuhkan, dan berjumpa dengan
            teman hingga mentor yang berpengalaman di bidangnya
          </Paragraph>
        </div>
      </Container>
    </header>
  );
};

export { Header };
