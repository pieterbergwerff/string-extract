export const hexadecimalNumbersPlugin = (str: string) => {
  const hexadecimalNumberPattern = /\b0x[0-9A-Fa-f]+\b/g;
  return str.match(hexadecimalNumberPattern) || [];
};

export default hexadecimalNumbersPlugin;

export const description = `This plugin extracts all hexadecimal numbers from a given string, capturing sequences that start with 0x followed by hexadecimal digits (0-9, A-F). It returns an array of matched hexadecimal numbers or an empty array if no matches are found. This is useful for parsing and analyzing text to identify hexadecimal values commonly used in programming and digital systems.`;

export const example = ``;
