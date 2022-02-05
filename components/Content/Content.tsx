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
        className="prose mx-auto prose-img:max-h-64 prose-img:w-full prose-img:object-contain lg:prose-xl lg:prose-img:max-h-96"
      ></div>
    </div>
  );
};

export { Content };
