import hljs from 'highlight.js';
import MarkdownIt from 'markdown-it';

const markdown = new MarkdownIt({
  highlight(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (error) {
        console.error(error);
      }
    }

    return '';
  },
})
  .use(require('markdown-it-video'), {
    youtube: { width: '100%', height: 390 },
  })
  .use(require('markdown-it-image-figures'), {
    figcaption: true,
  });

export { markdown };
