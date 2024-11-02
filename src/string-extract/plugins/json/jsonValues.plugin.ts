export const jsonValuesPlugin = (str: string) => {
  const jsonValuePattern = /:\s*("[^"]+"|\d+|true|false|null)/g;
  const matches = [];
  let match;
  while ((match = jsonValuePattern.exec(str)) !== null) {
    matches.push(match[1]);
  }
  return matches;
};

export default jsonValuesPlugin;

export const description = `This plugin extracts all JSON values from a given string, capturing values that are strings, numbers, booleans, or null. It returns an array of matched JSON values or an empty array if no matches are found. This is useful for parsing and analyzing text to identify and extract values from JSON objects.`;

export const example = ``;
