export const htmlTableCellsPlugin = (str: string) => {
  const htmlTableCellPattern = /<td>(.*?)<\/td>/g;
  const matches = [];
  let match;
  while ((match = htmlTableCellPattern.exec(str)) !== null) {
    matches.push(match[1].trim());
  }
  return matches;
};

export default htmlTableCellsPlugin;

export const description = `This plugin extracts all table cell elements from a given string, capturing the text content within each <td> tag. It returns an array of table cell texts or an empty array if no matches are found. This is useful for parsing and analyzing HTML content to identify and extract the text of table cells.`;

export const example = ``;
