export const htmlTablesPlugin = (str: string) => {
  const htmlTablePattern = /<table\b[^>]*>([\s\S]*?)<\/table>/g;
  const matches = [];
  let match;
  while ((match = htmlTablePattern.exec(str)) !== null) {
    matches.push(match[1].trim());
  }
  return matches;
};

export default htmlTablesPlugin;

export const description = `This plugin extracts all table elements from a given string, capturing the content within each <table> tag. It returns an array of table contents or an empty array if no matches are found. This is useful for parsing and analyzing HTML content to identify and extract the structure and data of tables.`;

export const example = ``;
