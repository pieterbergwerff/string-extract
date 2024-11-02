export const htmlHeadingsPlugin = (str: string) => {
  const htmlHeadingPattern = /<h[1-6]>(.*?)<\/h[1-6]>/g;
  const matches = [];
  let match;
  while ((match = htmlHeadingPattern.exec(str)) !== null) {
    matches.push(match[1].trim());
  }
  return matches;
};

export default htmlHeadingsPlugin;

export const description = `This plugin extracts all heading elements from a given string, capturing the text content within each <h1> to <h6> tag. It returns an array of heading texts or an empty array if no matches are found. This is useful for parsing and analyzing HTML content to identify and extract the text of heading elements.`;

export const example = ``;
