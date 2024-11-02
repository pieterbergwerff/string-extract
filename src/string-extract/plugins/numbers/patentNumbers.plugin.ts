export const patentNumbersPlugin = (str: string) => {
  const patentPattern = /\bUS\d{7}[A-Z]?\b/g;
  return str.match(patentPattern) || [];
};

export default patentNumbersPlugin;

export const description = `This plugin extracts all US patent numbers from a given string, capturing the standard format of US followed by 7 digits and an optional letter (e.g., US1234567A). It returns an array of matched patent numbers or an empty array if no matches are found. This is useful for parsing and analyzing text to identify patent identifiers used in legal and technical documents.`;

export const example = ``;
