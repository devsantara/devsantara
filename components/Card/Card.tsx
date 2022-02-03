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
        'rounded-2xl border border-gray-light bg-white p-5',
        className
      )}
    >
      {children}
    </article>
  );
};

export { Card };
