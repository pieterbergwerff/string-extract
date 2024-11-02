export const cssVariablesPlugin = (str: string) => {
  const cssVariablePattern = /--([a-zA-Z0-9_-]+):\s*([^;]+);/g;
  const matches = [];
  let match;
  while ((match = cssVariablePattern.exec(str)) !== null) {
    matches.push({ variable: match[1], value: match[2] });
  }
  return matches;
};

export default cssVariablesPlugin;

export const description = `This plugin extracts all CSS custom properties (variables) from a given string, capturing the variable names and their corresponding values. It returns an array of objects, each containing a variable name and its value, or an empty array if no matches are found. This is useful for parsing and analyzing CSS code to identify all custom properties used.`;

export const example = ``;
