import { readDir } from '../fileSystem';

describe('fileSystem utils', () => {
  describe('readDir', () => {
    it('should not return exclude props when exclude is define', async () => {
      const results = await readDir('contents/academy', {
        exclude: 'index.md',
      });
      expect(results.includes('index.md')).toBeFalsy();
    });

    it('should return all when exclude is not define', async () => {
      const results = await readDir('contents/academy');
      expect(results.includes('index.md')).toBeTruthy();
    });
  });
});
