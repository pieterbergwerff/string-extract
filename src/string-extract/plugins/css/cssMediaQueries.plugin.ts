export const cssMediaQueriesPlugin = (str: string) => {
  const cssMediaQueryPattern = /@media\s+([^{]+)\s*{/g;
  const matches = [];
  let match;
  while ((match = cssMediaQueryPattern.exec(str)) !== null) {
    matches.push(match[1].trim());
  }
  return matches;
};

export default cssMediaQueriesPlugin;

export const description = `This plugin extracts all CSS media query conditions from a given string, capturing the conditions defined in @media rules. It returns an array of media query conditions or an empty array if no matches are found. This is useful for parsing and analyzing responsive design rules in CSS.`;

export const example = ``;
