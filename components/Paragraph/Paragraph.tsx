import { Children } from '@/types';
import clsx from 'clsx';
import { FC } from 'react';

interface Props {
  children: Children;
  className?: string;
}

const Paragraph: FC<Props> = ({ className, children }) => {
  return (
    <p className={clsx('text-sm text-gray-dark lg:text-md', className)}>
      {children}
    </p>
  );
};

export { Paragraph };
