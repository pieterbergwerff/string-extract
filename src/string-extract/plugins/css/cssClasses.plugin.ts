export const cssClassesPlugin = (str: string) => {
  const cssClassPattern = /\.([a-zA-Z0-9_-]+)\s*{/g;
  const matches = [];
  let match;
  while ((match = cssClassPattern.exec(str)) !== null) {
    matches.push(match[1]);
  }
  return matches;
};

export default cssClassesPlugin;

export const description = `This plugin extracts all CSS class names from a given string, capturing the class names defined in CSS selectors. It returns an array of class names or an empty array if no matches are found. This is useful for parsing and analyzing CSS code to identify all class selectors used.`;

export const example = ``;
