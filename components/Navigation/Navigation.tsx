import { FC } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

interface Props {
  isOpen: boolean;
}

const navigationRoutes = [
  { id: 1, name: 'Academy', url: '/academy' },
  { id: 2, name: 'Resourses', url: '/resourses' },
  { id: 3, name: 'Communities', url: '/communities' },
  { id: 4, name: 'About', url: '/about' },
];

const Navigation: FC<Props> = ({ isOpen }) => {
  return (
    <ul
      className={clsx(
        'fixed top-14 left-0 right-0 bottom-0 gap-x-8 pt-2 text-sm lg:static lg:flex lg:p-0',
        { hidden: !isOpen }
      )}
    >
      {navigationRoutes.map(({ id, name, url }) => (
        <li key={id}>
          <Link href={url}>
            <a className="flex h-full items-center border-b border-secondary p-4 lg:p-0">
              {name}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export { Navigation };
