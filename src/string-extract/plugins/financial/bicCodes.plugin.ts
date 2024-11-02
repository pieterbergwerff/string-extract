export const bicCodesPlugin = (str: string) => {
  const bicPattern = /\b[A-Z]{4}[A-Z]{2}[A-Z0-9]{2}([A-Z0-9]{3})?\b/g;
  return str.match(bicPattern) || [];
};

export default bicCodesPlugin;

export const description = `This plugin extracts all BIC (Bank Identifier Code) codes from a given string, capturing the standard format of 8 or 11 alphanumeric characters. It returns an array of matched BIC codes or an empty array if no matches are found. This is useful for parsing and analyzing text to identify bank codes used in financial transactions.`;

export const example = ``;
