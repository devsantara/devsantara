import { Children } from '@/types';
import clsx from 'clsx';
import { FC } from 'react';

interface Props {
  children: Children;
  className?: string;
}

const Container: FC<Props> = ({ children, className }) => {
  return (
    <div className={clsx('container mx-auto px-4', className)}>{children}</div>
  );
};

export { Container };
