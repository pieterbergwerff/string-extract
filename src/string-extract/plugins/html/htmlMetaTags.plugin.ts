export const htmlMetaTagsPlugin = (str: string) => {
  const htmlMetaTagPattern = /<meta\s+(?:[^>]*?\s+)?content="([^"]*)"/g;
  const matches = [];
  let match;
  while ((match = htmlMetaTagPattern.exec(str)) !== null) {
    matches.push(match[1]);
  }
  return matches;
};

export default htmlMetaTagsPlugin;

export const description = `This plugin extracts all meta tag content attributes from a given string, capturing the content attribute within each <meta> tag. It returns an array of meta tag contents or an empty array if no matches are found. This is useful for parsing and analyzing HTML content to identify and extract metadata.`;

export const example = ``;
