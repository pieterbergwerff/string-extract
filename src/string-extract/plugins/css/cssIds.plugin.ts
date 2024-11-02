export const cssIdsPlugin = (str: string) => {
  const cssIdPattern = /#([a-zA-Z0-9_-]+)\s*{/g;
  const matches = [];
  let match;
  while ((match = cssIdPattern.exec(str)) !== null) {
    matches.push(match[1]);
  }
  return matches;
};

export default cssIdsPlugin;

export const description = `This plugin extracts all CSS ID selectors from a given string, capturing the ID names defined in CSS selectors. It returns an array of ID names or an empty array if no matches are found. This is useful for parsing and analyzing CSS code to identify all ID selectors used.`;

export const example = ``;
