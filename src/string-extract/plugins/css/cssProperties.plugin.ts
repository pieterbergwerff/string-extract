export const cssPropertiesPlugin = (str: string) => {
  const cssPropertyPattern = /([a-zA-Z-]+)\s*:\s*([^;]+);/g;
  const matches = [];
  let match;
  while ((match = cssPropertyPattern.exec(str)) !== null) {
    matches.push({ property: match[1], value: match[2] });
  }
  return matches;
};

export default cssPropertiesPlugin;

export const description = `This plugin extracts all CSS property-value pairs from a given string, capturing the property names and their corresponding values. It returns an array of objects, each containing a property and its value, or an empty array if no matches are found. This is useful for parsing and analyzing CSS code to identify all style declarations used.`;

export const example = ``;
