import hljs from 'highlight.js';
import MarkdownIt from 'markdown-it';

const markdown = new MarkdownIt({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (__) {}
    }

    return '';
  },
});

export { markdown };
