export const romanNumeralsPlugin = (str: string) => {
  const romanNumeralPattern = /\b[MCDXLIV]+\b/g;
  return str.match(romanNumeralPattern) || [];
};

export default romanNumeralsPlugin;

export const description = `This plugin extracts all Roman numerals from a given string, capturing sequences of the characters M, C, D, X, L, I, and V. It returns an array of matched Roman numerals or an empty array if no matches are found. This is useful for parsing and analyzing text to identify Roman numeral values commonly used in historical and formal contexts.`;

export const example = ``;
