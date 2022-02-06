import React, { FC } from 'react';
import clsx from 'clsx';

import { Children } from '@/types';

// components
import { Container } from '@/components/Container';

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
            'flex flex-col gap-y-4 py-16 text-left sm:items-center sm:text-center md:pt-20 lg:gap-y-5 xl:pb-14',
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
