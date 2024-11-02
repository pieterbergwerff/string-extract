export const htmlEntitiesPlugin = (str: string) => {
  const htmlEntityPattern = /&[a-zA-Z0-9]+;/g;
  return str.match(htmlEntityPattern) || [];
};

export default htmlEntitiesPlugin;

export const description = `This plugin extracts all HTML entities from a given string, capturing sequences that start with & and end with ;, representing special characters in HTML. It returns an array of matched HTML entities or an empty array if no matches are found. This is useful for parsing and analyzing HTML content to identify and extract encoded special characters.`;

export const example = ``;
