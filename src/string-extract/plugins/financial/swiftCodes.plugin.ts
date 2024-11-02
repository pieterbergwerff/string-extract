export const swiftCodesPlugin = (str: string) => {
  const swiftPattern = /\b[A-Z]{4}[A-Z]{2}[A-Z0-9]{2}([A-Z0-9]{3})?\b/g;
  return str.match(swiftPattern) || [];
};

export default swiftCodesPlugin;

export const description = `This plugin extracts all SWIFT (Society for Worldwide Interbank Financial Telecommunication) codes from a given string, capturing the standard format of 8 or 11 alphanumeric characters. It returns an array of matched SWIFT codes or an empty array if no matches are found. This is useful for parsing and analyzing text to identify bank codes used in international financial transactions.`;

export const example = ``;
