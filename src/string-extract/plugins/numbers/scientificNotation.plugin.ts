export const scientificNotationPlugin = (str: string) => {
  const scientificNotationPattern = /\b\d+(\.\d+)?[eE][+-]?\d+\b/g;
  return str.match(scientificNotationPattern) || [];
};

export default scientificNotationPlugin;

export const description = `This plugin extracts all numbers in scientific notation from a given string, capturing sequences that include a base number followed by an exponent (e.g., 1.23e+10, 4.56E-3). It returns an array of matched scientific notation numbers or an empty array if no matches are found. This is useful for parsing and analyzing text to identify scientific and mathematical data.`;

export const example = ``;
