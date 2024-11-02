export const fractionsPlugin = (str: string) => {
  const fractionPattern = /\b\d+\/\d+\b/g;
  return str.match(fractionPattern) || [];
};

export default fractionsPlugin;

export const description = `This plugin extracts all fractions from a given string, capturing numerical values in the format of one number divided by another (e.g., 1/2, 3/4). It returns an array of matched fractions or an empty array if no matches are found. This is useful for parsing and analyzing text to identify fractional values.`;

export const example = ``;
