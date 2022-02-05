import moment from 'moment';
import Link from 'next/link';
import { FC } from 'react';
import { BiRevision } from 'react-icons/bi';
import { Card } from '../Card';
import { Paragraph } from '../Paragraph';

interface Props {
  title: string;
  order: number;
  lastUpdate: string;
  slug: string;
}

const ModuleList: FC<Props> = ({ title, order, lastUpdate, slug }) => {
  return (
    <li>
      <Link href={slug}>
        <a>
          <Card className="grid grid-cols-[60px,1fr,auto] gap-x-2 rounded-lg border border-gray-light bg-white px-5 py-3 lg:grid-cols-[70px,1fr,auto] lg:py-4 lg:px-8 xl:rounded-xl">
            <span className="text-lg font-bold text-primary lg:text-xl">
              # {order}
            </span>
            <div className="flex items-center">
              <Paragraph>{title}</Paragraph>
            </div>

            <Paragraph
              className="hidden items-center gap-x-2 text-gray-dark md:flex"
              size="small"
            >
              <BiRevision className="text-xl" />
              <span>{moment(lastUpdate).fromNow()}</span>
            </Paragraph>
          </Card>
        </a>
      </Link>
    </li>
  );
};

export { ModuleList };
