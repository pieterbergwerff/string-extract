export const ibanNumbersPlugin = (str: string) => {
  const ibanPattern = /\b[A-Z]{2}\d{2}[A-Z0-9]{1,30}\b/g;
  return str.match(ibanPattern) || [];
};

export default ibanNumbersPlugin;

export const description = `This plugin extracts all IBAN (International Bank Account Number) codes from a given string, capturing the standard format of country code, check digits, and up to 30 alphanumeric characters. It returns an array of matched IBAN codes or an empty array if no matches are found. This is useful for parsing and analyzing text to identify international bank account numbers.`;

export const example = ``;
