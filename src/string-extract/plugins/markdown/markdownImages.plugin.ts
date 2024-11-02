export const markdownImagesPlugin = (str: string) => {
  const markdownImagePattern = /!\[([^\]]*)\]\(([^)]+)\)/g;
  const matches = [];
  let match;
  while ((match = markdownImagePattern.exec(str)) !== null) {
    matches.push({ alt: match[1], url: match[2] });
  }
  return matches;
};

export default markdownImagesPlugin;

export const description = `This plugin extracts all Markdown image syntax from a given string, capturing the alt text and URL of each image. It returns an array of objects, each containing the alt text and URL, or an empty array if no matches are found. This is useful for parsing and analyzing Markdown content to identify and extract image references.`;

export const example = ``;
