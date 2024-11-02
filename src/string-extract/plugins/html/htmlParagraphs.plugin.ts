export const htmlParagraphsPlugin = (str: string) => {
  const htmlParagraphPattern = /<p>(.*?)<\/p>/g;
  const matches = [];
  let match;
  while ((match = htmlParagraphPattern.exec(str)) !== null) {
    matches.push(match[1].trim());
  }
  return matches;
};

export default htmlParagraphsPlugin;

export const description = `This plugin extracts all paragraph elements from a given string, capturing the text content within each <p> tag. It returns an array of paragraph texts or an empty array if no matches are found. This is useful for parsing and analyzing HTML content to identify and extract the text of paragraph elements.`;

export const example = ``;
