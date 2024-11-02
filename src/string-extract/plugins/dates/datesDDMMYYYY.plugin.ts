export const datesDDMMYYYYPlugin = (str: string) => {
  const datePattern = /\b\d{2}\/\d{2}\/\d{4}\b/g;
  return str.match(datePattern) || [];
};

export default datesDDMMYYYYPlugin;

export const description = `This plugin extracts all dates in the DD/MM/YYYY format from a given string. It returns an array of matched dates or an empty array if no matches are found. This is useful for parsing and analyzing text to identify date information in this specific format.`;

export const example = ``;
