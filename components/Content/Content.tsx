import clsx from 'clsx';
import { FC } from 'react';
import { Button } from '@/components/Button';

interface Props {
  title: string;
  content?: string;
}

const Content: FC<Props> = ({ title, content }) => {
  const proseImg = clsx(
    'prose-img:max-h-64 prose-img:w-full prose-img:object-contain lg:prose-img:max-h-96 prose-img:rounded-lg prose-img:border prose-img:border-gray-light'
  );

  return (
    <div className="rounded-lg border-gray-light p-0 lg:border lg:p-12">
      <div className={clsx('prose max-w-none', proseImg)}>
        <article dangerouslySetInnerHTML={{ __html: content || '' }}></article>
      </div>
    </div>
  );
};

export { Content };
