export const cssFunctionsPlugin = (str: string) => {
  const cssFunctionPattern = /\b([a-zA-Z]+)\(([^)]+)\)/g;
  const matches = [];
  let match;
  while ((match = cssFunctionPattern.exec(str)) !== null) {
    matches.push({ function: match[1], value: match[2] });
  }
  return matches;
};

export default cssFunctionsPlugin;

export const description = `This plugin extracts all CSS function calls from a given string, capturing the function names and their respective values. It returns an array of objects, each containing a function name and its value, or an empty array if no matches are found. This is useful for parsing CSS code to identify and analyze function usage.`;

export const example = ``;
