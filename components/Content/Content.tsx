import { FC } from 'react';

interface Props {
  title: string;
  content?: string;
}

const Content: FC<Props> = ({ title, content }) => {
  return (
    <div className="min-h-full rounded-xl border-gray-light p-0 md:p-12 lg:border">
      <div
        dangerouslySetInnerHTML={{ __html: content || '' }}
        className="prose mx-auto prose-img:w-full prose-img:object-contain lg:prose-xl"
      ></div>
    </div>
  );
};

export { Content };
