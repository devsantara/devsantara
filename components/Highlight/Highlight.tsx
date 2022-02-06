import { Children } from '@/types';
import { FC } from 'react';

interface Props {
  children: Children;
}

const Highlight: FC<Props> = ({ children }) => (
  <span className="text-primary">{children}</span>
);

export { Highlight };
