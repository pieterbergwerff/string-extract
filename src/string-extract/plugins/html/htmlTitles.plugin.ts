export const htmlTitlesPlugin = (str: string) => {
  const htmlTitlePattern = /<title>(.*?)<\/title>/g;
  const matches = [];
  let match;
  while ((match = htmlTitlePattern.exec(str)) !== null) {
    matches.push(match[1].trim());
  }
  return matches;
};

export default htmlTitlesPlugin;

export const description = `This plugin extracts all title elements from a given string, capturing the text content within each <title> tag. It returns an array of title texts or an empty array if no matches are found. This is useful for parsing and analyzing HTML content to identify and extract the text of title elements.`;

export const example = ``;
