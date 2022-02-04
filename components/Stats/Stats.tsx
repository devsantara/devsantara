import clsx from 'clsx';
import { FC } from 'react';
import { BiBook, BiRevision } from 'react-icons/bi';

interface Props {
  moduleLength?: number;
  lastUpdate: string;
  className?: string;
}

const Stats: FC<Props> = ({ moduleLength, lastUpdate, className }) => {
  const splitLastUpdate = lastUpdate.split(' ');

  return (
    <ul className={clsx('flex gap-x-4 text-gray-dark', className)}>
      <li className="flex items-center gap-x-2 text-xs lg:text-sm">
        <BiBook className="text-md lg:text-xl" />
        <span>
          <strong className="mr-1">{moduleLength || 0}</strong>Modules
        </span>
      </li>
      <li className="flex items-center gap-x-2 text-xs lg:text-sm">
        <BiRevision className="text-md lg:text-xl" />
        <span>
          <strong className="mr-1">{splitLastUpdate[0]}</strong>
          {splitLastUpdate.slice(1).join(' ')}
        </span>
      </li>
    </ul>
  );
};

export { Stats };
