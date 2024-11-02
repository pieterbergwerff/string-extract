export const cssUnitsPlugin = (str: string) => {
  const cssUnitPattern = /\b\d+(px|em|rem|vw|vh|%)\b/g;
  const matches = [];
  let match;
  while ((match = cssUnitPattern.exec(str)) !== null) {
    matches.push(match[0]);
  }
  return matches;
};

export default cssUnitsPlugin;

export const description = `This plugin extracts all CSS units (such as px, em, rem, vw, vh, and %) from a given string, capturing the numerical values along with their units. It returns an array of matched units or an empty array if no matches are found. This is useful for parsing and analyzing CSS code to identify all unit-based measurements used.`;

export const example = ``;
