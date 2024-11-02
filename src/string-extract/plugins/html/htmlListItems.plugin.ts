export const htmlListItemsPlugin = (str: string) => {
  const htmlListItemPattern = /<li>(.*?)<\/li>/g;
  const matches = [];
  let match;
  while ((match = htmlListItemPattern.exec(str)) !== null) {
    matches.push(match[1].trim());
  }
  return matches;
};

export default htmlListItemsPlugin;

export const description = `This plugin extracts all list item elements from a given string, capturing the text content within each <li> tag. It returns an array of list item texts or an empty array if no matches are found. This is useful for parsing and analyzing HTML content to identify and extract the text of list items.`;

export const example = ``;
