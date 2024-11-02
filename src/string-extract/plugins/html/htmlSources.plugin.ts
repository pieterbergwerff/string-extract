export const htmlImageSourcesPlugin = (str: string) => {
  const htmlImagePattern = /<img\s+(?:[^>]*?\s+)?src="([^"]*)"/g;
  const matches = [];
  let match;
  while ((match = htmlImagePattern.exec(str)) !== null) {
    matches.push(match[1]);
  }
  return matches;
};

export default htmlImageSourcesPlugin;

export const description = `This plugin extracts all image source URLs from a given string, capturing the src attribute within each <img> tag. It returns an array of image URLs or an empty array if no matches are found. This is useful for parsing and analyzing HTML content to identify and extract image sources.`;

export const example = ``;
