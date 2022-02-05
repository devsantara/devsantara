import React, { FC } from 'react';
import { Paragraph } from '@/components/Paragraph';
import { Title } from '@/components/Title';
import { Container } from '@/components/Container';
import { Children } from '@/types';
import clsx from 'clsx';

interface Props {
  children: Children;
  className?: string;
}

const Header: FC<Props> = ({ children, className }) => {
  return (
    <header>
      <Container>
        <div
          className={clsx(
            'flex flex-col gap-y-4 py-16 text-left sm:items-center sm:text-center lg:gap-y-5 xl:pt-20 xl:pb-14',
            className
          )}
        >
          {children}
        </div>
      </Container>
    </header>
  );
};

export { Header };
