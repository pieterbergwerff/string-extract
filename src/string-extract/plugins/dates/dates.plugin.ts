export const datesPlugin = (str: string) => {
  const datePattern = /\b\d{2}\/\d{2}\/\d{4}|\d{4}-\d{2}-\d{2}\b/g;
  return str.match(datePattern) || [];
};

export default datesPlugin;

export const description = `This plugin extracts all dates from a given string, capturing both DD/MM/YYYY and YYYY-MM-DD formats. It returns an array of matched dates or an empty array if no matches are found. This is useful for parsing and analyzing text to identify date information in different formats.`;

export const example = ``;
