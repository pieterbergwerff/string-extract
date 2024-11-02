export const htmlScriptsPlugin = (str: string) => {
  const htmlScriptPattern = /<script\b[^>]*>([\s\S]*?)<\/script>/g;
  const matches = [];
  let match;
  while ((match = htmlScriptPattern.exec(str)) !== null) {
    matches.push(match[1].trim());
  }
  return matches;
};

export default htmlScriptsPlugin;

export const description = `This plugin extracts all script elements from a given string, capturing the content within each <script> tag. It returns an array of script contents or an empty array if no matches are found. This is useful for parsing and analyzing HTML content to identify and extract JavaScript code embedded in the document.`;

export const example = ``;
