export const octalNumbersPlugin = (str: string) => {
  const octalNumberPattern = /\b0o[0-7]+\b/g;
  return str.match(octalNumberPattern) || [];
};

export default octalNumbersPlugin;

export const description = `This plugin extracts all octal numbers from a given string, capturing sequences that start with 0o followed by digits 0-7. It returns an array of matched octal numbers or an empty array if no matches are found. This is useful for parsing and analyzing text to identify octal values commonly used in programming and digital systems.`;

export const example = ``;
