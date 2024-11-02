export const binaryNumbersPlugin = (str: string) => {
  const binaryNumberPattern = /\b[01]+\b/g;
  return str.match(binaryNumberPattern) || [];
};

export default binaryNumbersPlugin;

export const description = `This plugin extracts all binary numbers from a given string, capturing sequences of 0s and 1s. It returns an array of matched binary numbers or an empty array if no matches are found. This is useful for parsing and analyzing text to identify binary data or binary-coded information.`;

export const example = ``;
