import { FC } from 'react';
import Head from 'next/head';

import { Children } from '@/types';

interface Props {
  children?: Children;
  title?: string;
  keywords?: string[];
  description?: string;
  preview?: string;
  theme?: string;
}

const defaultKeywords = [
  'devsantara',
  'developer nusantara',
  'belajar programming',
  'developer',
];

const AppHead: FC<Props> = ({
  children,
  title = 'Devsantara | Developer Nusantara',
  keywords = defaultKeywords,
  description = 'Pelajari keterampilan yang sangat dibutuhkan di masa depan dan berkomunitas bersama Devsantara.',
  preview = 'https://firebasestorage.googleapis.com/v0/b/devsantara-994c0.appspot.com/o/devsantara%2Fbrand.png?alt=media',
  theme = '#4267C5',
}) => {
  const keywordsString = [...defaultKeywords, ...keywords]?.join(', ');

  return (
    <Head>
      <title>{title}</title>
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta name="keywords" content={keywordsString} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={preview} />
      <meta name="theme-color" content={theme} />
      {children}
    </Head>
  );
};

export { AppHead };
