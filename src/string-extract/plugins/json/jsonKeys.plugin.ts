export const getJsonKeysPlugin = (str: string) => {
  const jsonKeyPattern = /"([^"]+)":/g;
  const matches = [];
  let match;
  while ((match = jsonKeyPattern.exec(str)) !== null) {
    matches.push(match[1]);
  }
  return matches;
};

export default getJsonKeysPlugin;

export const description = `This plugin extracts all JSON keys from a given string, capturing the keys enclosed in double quotes followed by a colon. It returns an array of matched JSON keys or an empty array if no matches are found. This is useful for parsing and analyzing text to identify and extract keys from JSON objects.`;

export const example = ``;
