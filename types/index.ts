import { ReactChild } from 'react';

export type Children = ReactChild | ReactChild[];
export type LinkTarget = '_blank' | '_parent' | '_self' | '_top';
export interface MatterMeta {
  date: string;
  description: string;
  draft: true;
  keywords: string[];
  lastmod: string;
  order: number;
  preview: string;
  slug: string;
  theme: string;
  title: string;
  length?: number;
  content?: string;
}
