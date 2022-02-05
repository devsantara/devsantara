import { Children } from '@/types';
import { FC } from 'react';

interface Props {
  children: Children;
}

const Main: FC<Props> = ({ children }) => {
  return <main className="flex-1">{children}</main>;
};

export { Main };
