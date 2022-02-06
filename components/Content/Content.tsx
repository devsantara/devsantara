import clsx from 'clsx';
import { FC } from 'react';

interface Props {
  content: string;
}

const Content: FC<Props> = ({ content }) => {
  const proseImg = clsx(
    'prose-img:max-h-64 prose-img:w-full prose-img:object-contain lg:prose-img:max-h-96 prose-img:rounded-lg prose-img:border prose-img:border-gray-light'
  );

  return (
    <div className="rounded-lg border border-gray-light px-4 py-8 sm:px-8 lg:py-12">
      <div
        className={clsx(
          'prose mx-auto max-w-[840px] font-openSans tracking-wide prose-p:leading-loose',
          proseImg
        )}
      >
        <article dangerouslySetInnerHTML={{ __html: content }}></article>
      </div>
    </div>
  );
};

export { Content };
