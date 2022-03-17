import showdown from 'showdown';

export function getSyllabusHTML(markdown) {
  const content = markdownToHTML(markdown);

  const finalHtml = `
    <html>
      <style>
        ${syllabusStyles}
      </style>
      <body>
      ${content}
      </body>
    </html>
  `;
  return finalHtml;
}

function markdownToHTML(markdown) {
  const converter = new showdown.Converter();
  converter.setFlavor('github');;
  return converter.makeHtml(markdown);
}

const syllabusStyles = `
  body {
    font-family: "Vollkorn", Palatino, Times;
    margin-top: 32px;
    margin-left: 5%;
    margin-right: 5%;
    text-align: justify;
    line-height: 1.5;
    background:#fefefe;
                  ")" +
                  "[ ]*"
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
  }

  h1 {
    color: #000000;
    font-size: 4em;
    text-align: center;
    text-transform: capitalize;
  }

  h2 {
    border-bottom: 1px solid #CCCCCC;
    color: #000000;
    font-size: 3.5em;
    text-align: center;
  }

  h3 {
    font-size: 3em;
  }

  h4 {
    font-size: 2.8em;
  }

  h5 {
    font-size: 2.5em;
  }

  h6 {
    color: #777777;
    background-color: inherit;
    font-size: 2em;
  }

  hr {
    height: 0.2em;
    border: 0;
    color: #CCCCCC;
    background-color: #CCCCCC;
  }

  p, blockquote, ul, ol, dl, li, table, pre {
    margin: 15px 0;
    font-size: 1.5em;
    word-wrap: break-word;
    overflow-wrap: break-word;
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    hyphens: auto;
  }

  p {
    font-size: 2.2em;
  }

  code, pre {
    border-radius: 3px;
    background-color: #F8F8F8;
    color: inherit;
  }

  code {
    border: 1px solid #EAEAEA;
    margin: 0 2px;
    padding: 0 5px;
  }

  pre {
    border: 1px solid #CCCCCC;
    line-height: 1.25em;
    overflow: auto;
    padding: 6px 10px;
  }

  pre > code {
    border: 0;
    margin: 0;
    padding: 0;
  }

  a, a:visited {
    color: #4183C4;
    background-color: inherit;
    text-decoration: none;
  }
`;
