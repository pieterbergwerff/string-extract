export const ismnNumbersPlugin = (str: string) => {
  const ismnPattern = /\bM-\d{4}-\d{4}-\d{1}\b/g;
  return str.match(ismnPattern) || [];
};

export default ismnNumbersPlugin;

export const description = `This plugin extracts all ISMN (International Standard Music Number) codes from a given string, capturing the standard format used for identifying printed music publications (e.g., M-1234-5678-9). It returns an array of matched ISMN codes or an empty array if no matches are found. This is useful for parsing and analyzing text to identify music publication identifiers.`;

export const example = ``;
