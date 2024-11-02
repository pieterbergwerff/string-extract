export const htmlFormInputsPlugin = (str: string) => {
  const htmlInputPattern = /<input\s+(?:[^>]*?\s+)?name="([^"]*)"/g;
  const matches = [];
  let match;
  while ((match = htmlInputPattern.exec(str)) !== null) {
    matches.push(match[1]);
  }
  return matches;
};

export default htmlFormInputsPlugin;

export const description = `This plugin extracts all input field names from a given string, capturing the name attribute within each <input> tag. It returns an array of input field names or an empty array if no matches are found. This is useful for parsing and analyzing HTML forms to identify the names of input fields.`;

export const example = ``;
