export const htmlCommentsPlugin = (str: string) => {
  const htmlCommentPattern = /<!--(.*?)-->/g;
  const matches = [];
  let match;
  while ((match = htmlCommentPattern.exec(str)) !== null) {
    matches.push(match[1].trim());
  }
  return matches;
};

export default htmlCommentsPlugin;

export const description = `This plugin extracts all HTML comments from a given string, capturing the text content within each <!-- --> comment tag. It returns an array of comment texts or an empty array if no matches are found. This is useful for parsing and analyzing HTML content to identify and extract comments embedded in the code.`;

export const example = ``;
