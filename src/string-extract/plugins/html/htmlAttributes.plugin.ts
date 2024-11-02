export const htmlAttributesPlugin = (str: string) => {
  const htmlAttributePattern = /\b([a-zA-Z-]+)="([^"]*)"/g;
  const matches = [];
  let match;
  while ((match = htmlAttributePattern.exec(str)) !== null) {
    matches.push({ attribute: match[1], value: match[2] });
  }
  return matches;
};

export default htmlAttributesPlugin;

export const description = `This plugin extracts all HTML attributes from a given string, capturing the attribute names and their corresponding values. It returns an array of objects, each containing an attribute name and its value, or an empty array if no matches are found. This is useful for parsing and analyzing HTML content to identify and extract attribute-value pairs.`;

export const example = ``;
