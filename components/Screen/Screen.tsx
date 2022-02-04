import { FC } from 'react';

import { Children } from '@/types';

interface Props {
  children: Children;
}

const Screen: FC<Props> = ({ children }) => {
  return <div className="flex min-h-screen flex-col">{children}</div>;
};

export { Screen };
