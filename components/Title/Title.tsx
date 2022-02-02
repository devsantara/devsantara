import { FC } from 'react';
import clsx from 'clsx';
import { Children } from '@/types';

interface Props {
  children: Children;
  className?: string;
}

const Title: FC<Props> = ({ children, className }) => {
  return (
    <h1
      className={clsx(
        'text-3xl font-bold leading-snug lg:text-[2.375rem]',
        className
      )}
    >
      {children}
    </h1>
  );
};

export { Title };
