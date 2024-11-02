export const isbn13NumbersPlugin = (str: string) => {
  const isbn13Pattern =
    /\b97[89][- ]?\d{1,5}[- ]?\d{1,7}[- ]?\d{1,7}[- ]?\d\b/g;
  return str.match(isbn13Pattern) || [];
};

export default isbn13NumbersPlugin;

export const description = `This plugin extracts all ISBN-13 (International Standard Book Number) codes from a given string, capturing the standard format starting with 978 or 979, followed by up to 5 digits, up to 7 digits, another set of up to 7 digits, and ending with a single digit. It returns an array of matched ISBN-13 codes or an empty array if no matches are found. This is useful for parsing and analyzing text to identify book identifiers used in publishing.`;

export const example = ``;
