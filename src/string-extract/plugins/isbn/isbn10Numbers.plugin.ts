export const isbn10NumbersPlugin = (str: string) => {
  const isbn10Pattern = /\b\d{1,5}[- ]?\d{1,7}[- ]?\d{1,7}[- ]?[0-9X]\b/g;
  return str.match(isbn10Pattern) || [];
};

export default isbn10NumbersPlugin;

export const description = `This plugin extracts all ISBN-10 (International Standard Book Number) codes from a given string, capturing the standard format of up to 5 digits, followed by up to 7 digits, another set of up to 7 digits, and ending with a single digit or ‘X’. It returns an array of matched ISBN-10 codes or an empty array if no matches are found. This is useful for parsing and analyzing text to identify book identifiers used in publishing.`;

export const example = ``;
