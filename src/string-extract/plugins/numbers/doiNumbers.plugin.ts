export const doiNumbersPlugin = (str: string) => {
  // eslint-disable-next-line no-useless-escape
  const doiPattern = /\b10\.\d{4,9}\/[-._;()\/:A-Z0-9]+\b/gi;
  return str.match(doiPattern) || [];
};

export default doiNumbersPlugin;

export const description = `This plugin extracts all DOI (Digital Object Identifier) numbers from a given string, capturing the standard format used for identifying academic and professional documents (e.g., 10.1234/abcd.5678). It returns an array of matched DOI numbers or an empty array if no matches are found. This is useful for parsing and analyzing text to identify references to scholarly articles and publications.`;

export const example = ``;
