export const htmlLinksPlugin = (str: string) => {
  const htmlLinkPattern = /<a\s+(?:[^>]*?\s+)?href="([^"]*)"/g;
  const matches = [];
  let match;
  while ((match = htmlLinkPattern.exec(str)) !== null) {
    matches.push(match[1]);
  }
  return matches;
};

export default htmlLinksPlugin;

export const description = `This plugin extracts all hyperlink URLs from a given string, capturing the href attribute within each <a> tag. It returns an array of URLs or an empty array if no matches are found. This is useful for parsing and analyzing HTML content to identify and extract links.`;

export const example = ``;
