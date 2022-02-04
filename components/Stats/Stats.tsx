import { FC } from 'react';
import { BiBook, BiTime } from 'react-icons/bi';

interface Props {
  moduleLength: number;
  estimatedTime: number;
}

const Stats: FC<Props> = ({ moduleLength, estimatedTime }) => {
  return (
    <ul className="mb-2 flex gap-x-4 text-gray-dark lg:mb-4">
      <li className="flex items-center gap-x-2 text-xs lg:text-sm">
        <BiBook className="text-md lg:text-xl" />
        <span>
          <strong className="mr-1">{moduleLength}</strong>Modul
        </span>
      </li>
      <li className="flex items-center gap-x-2 text-xs lg:text-sm">
        <BiTime className="text-md lg:text-xl" />
        <span>
          <strong className="mr-1">{estimatedTime}</strong>Jam
        </span>
      </li>
    </ul>
  );
};

export { Stats };
