export const jsonObjectsPlugin = (str: string) => {
  const jsonObjectPattern = /{[^{}]*}/g;
  return str.match(jsonObjectPattern) || [];
};

export default jsonObjectsPlugin;

export const description = `This plugin extracts all JSON objects from a given string, capturing sequences enclosed in curly braces. It returns an array of matched JSON objects or an empty array if no matches are found. This is useful for parsing and analyzing text to identify and extract JSON object structures.`;

export const example = ``;
