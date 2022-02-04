import { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import clsx from 'clsx';

interface Props {
  isOpen?: boolean;
  isStatic?: boolean;
}

const navigationRoutes = [
  { id: 1, name: 'Academy', url: '/academy' },
  { id: 2, name: 'Resourses', url: '/resourses' },
  { id: 3, name: 'Communities', url: '/communities' },
  { id: 4, name: 'About', url: '/about' },
];

const Navigation: FC<Props> = ({ isOpen, isStatic }) => {
  const { pathname } = useRouter();

  return (
    <ul
      className={clsx(
        'top-[57px] left-0 right-0 bottom-0 z-50 gap-x-8 pt-2 text-sm lg:static lg:flex lg:h-auto lg:p-0',
        { hidden: !isOpen, 'bg-white': isOpen, 'fixed h-screen': !isStatic }
      )}
    >
      {navigationRoutes.map(({ id, name, url }) => (
        <li key={id}>
          <Link href={url}>
            <a
              className={clsx(
                'flex h-full items-center border-b border-secondary p-4 lg:border-0 lg:p-0',
                {
                  'font-semibold text-primary':
                    pathname.startsWith(url) && !isStatic,
                }
              )}
            >
              {name}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export { Navigation };
