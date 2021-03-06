import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

import { MatterResult } from '@/types';

// components
import { Img } from '@/components/Img';

interface Props {
  theme: string;
  preview: string;
  className?: string;
  academySlug: string;
  academyModules: MatterResult[];
}

const SideBar: FC<Props> = ({
  theme,
  preview,
  academyModules,
  className,
  academySlug,
}) => {
  const { asPath } = useRouter();

  return (
    <aside className={className}>
      <Link href={academySlug}>
        <a>
          <div
            style={{ backgroundColor: theme }}
            className="grid h-20 place-content-center rounded-lg"
          >
            <Img
              src={preview}
              alt="devsantara"
              className="aspect-square h-10"
            />
          </div>
        </a>
      </Link>

      <ul className="mt-4 h-[70vh] divide-y divide-gray-light overflow-auto pr-2">
        {academyModules.map((module) => (
          <li key={module.order}>
            <Link href={module.slug}>
              <a
                title={module.title}
                className={clsx(
                  'block truncate py-4 text-sm underline-offset-2 hover:bg-secondary/40 lg:text-md',
                  {
                    'text-primary': asPath === module.slug,
                  }
                )}
              >
                {module.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export { SideBar };
