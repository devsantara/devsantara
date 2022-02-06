import matter from 'gray-matter';

import { MatterResult } from '@/types';
import { readFile } from './fileSystem';

export const getContentData = async (path: string): Promise<MatterResult> => {
  const mainFile = await readFile(path);

  const { data, content } = matter(mainFile);

  return { ...data, content } as MatterResult;
};
