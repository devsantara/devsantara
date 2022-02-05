import { FC } from 'react';
import { Children } from '@/types';
import clsx from 'clsx';

interface Props {
  children: Children;
  className?: string;
}

const Card: FC<Props> = ({ children, className }) => {
  return (
    <article
      className={clsx(
        'transitio border border-gray-light bg-white p-5 transition-colors duration-200 hover:shadow-md hover:shadow-secondary',
        className
      )}
    >
      {children}
    </article>
  );
};

export { Card };
