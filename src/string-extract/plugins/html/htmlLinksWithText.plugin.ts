export const htmlLinksWithTextPlugin = (str: string) => {
  const htmlLinkPattern = /<a\s+(?:[^>]*?\s+)?href="([^"]*)">([^<]*)<\/a>/g;
  const matches = [];
  let match;
  while ((match = htmlLinkPattern.exec(str)) !== null) {
    matches.push({ url: match[1], text: match[2] });
  }
  return matches;
};

export default htmlLinksWithTextPlugin;

export const description = `This plugin extracts all hyperlink URLs along with their display text from a given string, capturing both the href attribute and the text content within each <a> tag. It returns an array of objects, each containing a URL and its corresponding text, or an empty array if no matches are found. This is useful for parsing and analyzing HTML content to identify and extract links along with their display text.`;

export const example = ``;
