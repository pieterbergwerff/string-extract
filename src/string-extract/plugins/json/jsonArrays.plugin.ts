export const jsonArraysPlugin = (str: string) => {
  // eslint-disable-next-line no-useless-escape
  const jsonArrayPattern = /\[[^\[\]]*\]/g;
  return str.match(jsonArrayPattern) || [];
};

export default jsonArraysPlugin;

export const description = `This plugin extracts all JSON arrays from a given string, capturing sequences enclosed in square brackets. It returns an array of matched JSON arrays or an empty array if no matches are found. This is useful for parsing and analyzing text to identify and extract JSON array structures.`;

export const example = ``;
