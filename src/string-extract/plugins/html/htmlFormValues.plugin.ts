export const htmlFormValuesPlugin = (str: string) => {
  const htmlValuePattern = /<input\s+(?:[^>]*?\s+)?value="([^"]*)"/g;
  const matches = [];
  let match;
  while ((match = htmlValuePattern.exec(str)) !== null) {
    matches.push(match[1]);
  }
  return matches;
};

export default htmlFormValuesPlugin;

export const description = `This plugin extracts all input field values from a given string, capturing the value attribute within each <input> tag. It returns an array of input field values or an empty array if no matches are found. This is useful for parsing and analyzing HTML forms to identify the default values of input fields.`;

export const example = ``;
