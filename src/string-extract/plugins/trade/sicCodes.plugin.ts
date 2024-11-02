export const sicCodesPlugin = (str: string) => {
  const sicPattern = /\b\d{4}\b/g;
  return str.match(sicPattern) || [];
};

export default sicCodesPlugin;

export const description = `This plugin extracts all SIC (Standard Industrial Classification) codes from a given string, capturing the standard 4-digit format used for classifying industries. It returns an array of matched SIC codes or an empty array if no matches are found. This is useful for parsing and analyzing text to identify industry classification codes used in various sectors.`;

export const example = ``;
