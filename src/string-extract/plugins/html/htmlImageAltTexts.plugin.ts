export const htmlImageAltTextsPlugin = (str: string) => {
  const htmlImageAltPattern = /<img\s+(?:[^>]*?\s+)?alt="([^"]*)"/g;
  const matches = [];
  let match;
  while ((match = htmlImageAltPattern.exec(str)) !== null) {
    matches.push(match[1]);
  }
  return matches;
};

export default htmlImageAltTextsPlugin;

export const description = `This plugin extracts all alt text attributes from image elements in a given string, capturing the alt attribute within each <img> tag. It returns an array of alt texts or an empty array if no matches are found. This is useful for parsing and analyzing HTML content to identify and extract alternative text descriptions for images.`;

export const example = ``;
