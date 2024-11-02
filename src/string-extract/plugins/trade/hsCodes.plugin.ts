export const hsCodesPlugin = (str: string) => {
  const hsPattern = /\b\d{6}\b/g;
  return str.match(hsPattern) || [];
};

export default hsCodesPlugin;

export const description = `This plugin extracts all HS (Harmonized System) codes from a given string, capturing the standard 6-digit format used for classifying traded products. It returns an array of matched HS codes or an empty array if no matches are found. This is useful for parsing and analyzing text to identify product classification codes used in international trade.`;

export const example = ``;
