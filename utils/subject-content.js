import showdown from 'showdown';

export function markdownToHTML(markdown) {
  const converter = new showdown.Converter();
  converter.setFlavor('github');;
  return converter.makeHtml(markdown);
}
