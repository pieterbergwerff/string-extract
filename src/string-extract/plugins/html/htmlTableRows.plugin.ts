export const htmlTableRowsPlugin = (str: string) => {
  const htmlTableRowPattern = /<tr>(.*?)<\/tr>/g;
  const matches = [];
  let match;
  while ((match = htmlTableRowPattern.exec(str)) !== null) {
    matches.push(match[1].trim());
  }
  return matches;
};

export default htmlTableRowsPlugin;

export const description = `This plugin extracts all table row elements from a given string, capturing the text content within each <tr> tag. It returns an array of table row texts or an empty array if no matches are found. This is useful for parsing and analyzing HTML content to identify and extract the text of table rows.`;

export const example = ``;
