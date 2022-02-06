import fs from 'fs/promises';

interface ReadDirOptions {
  exclude: string;
}

export const readDir = async (dirPath: string, options?: ReadDirOptions) => {
  const filterExclude = (item: string) => item === options?.exclude;

  const results = await fs.readdir(dirPath);
  const excludeIndex = results.findIndex(filterExclude);

  if (excludeIndex !== -1) results.splice(excludeIndex, 1);

  return results;
};

export const readFile = async (filePath: string) => {
  return fs.readFile(filePath, { encoding: 'utf-8' });
};
