export const isbnNumbersPlugin = (str: string) => {
  const isbnPattern =
    /\b(?:ISBN(?:-1[03])?:?\s*)?(?=[-0-9 ]{17}|[-0-9X ]{13}|[0-9X]{10})(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]\b/g;
  return str.match(isbnPattern) || [];
};

export default isbnNumbersPlugin;

export const description = `This plugin extracts all ISBN (International Standard Book Number) codes from a given string, capturing both ISBN-10 and ISBN-13 formats. It returns an array of matched ISBN codes or an empty array if no matches are found. This is useful for parsing and analyzing text to identify book identifiers used in publishing.`;

export const example = ``;
