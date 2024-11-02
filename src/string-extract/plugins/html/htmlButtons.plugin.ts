export const htmlButtonsPlugin = (str: string) => {
  const htmlButtonPattern = /<button\b[^>]*>([\s\S]*?)<\/button>/g;
  const matches = [];
  let match;
  while ((match = htmlButtonPattern.exec(str)) !== null) {
    matches.push(match[1].trim());
  }
  return matches;
};

export default htmlButtonsPlugin;

export const description = `This plugin extracts all button elements from a given string, capturing the text content within each <button> tag. It returns an array of button texts or an empty array if no matches are found. This is useful for parsing and analyzing HTML content to identify and extract the text of button elements.`;
export const example = ``;
