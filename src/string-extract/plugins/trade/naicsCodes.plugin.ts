export const naicsCodesPlugin = (str: string) => {
  const naicsPattern = /\b\d{6}\b/g;
  return str.match(naicsPattern) || [];
};

export default naicsCodesPlugin;

export const description = `This plugin extracts all NAICS (North American Industry Classification System) codes from a given string, capturing the standard 6-digit format used for classifying business establishments. It returns an array of matched NAICS codes or an empty array if no matches are found. This is useful for parsing and analyzing text to identify industry classification codes used in North America.`;

export const example = ``;
