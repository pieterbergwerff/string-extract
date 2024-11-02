export const currencyAmountsPlugin = (str: string) => {
  const currencyPattern = /\b\d+(?:\.\d{2})?\s?(?:USD|EUR|GBP|JPY|CNY|INR)\b/g;
  return str.match(currencyPattern) || [];
};

export default currencyAmountsPlugin;

export const description = `This plugin extracts all currency amounts from a given string, capturing numerical values along with their currency codes (such as USD, EUR, GBP, JPY, CNY, and INR). It returns an array of matched currency amounts or an empty array if no matches are found. This is useful for parsing and analyzing text to identify monetary values in different currencies.`;

export const example = ``;
