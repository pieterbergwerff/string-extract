export const issnNumbersPlugin = (str: string) => {
  const issnPattern = /\b\d{4}-\d{3}[\dX]\b/g;
  return str.match(issnPattern) || [];
};

export default issnNumbersPlugin;

export const description = `This plugin extracts all ISSN (International Standard Serial Number) codes from a given string, capturing the standard 8-digit format used for identifying periodicals and serial publications (e.g., 1234-567X). It returns an array of matched ISSN codes or an empty array if no matches are found. This is useful for parsing and analyzing text to identify serial publication identifiers.`;

export const example = ``;
