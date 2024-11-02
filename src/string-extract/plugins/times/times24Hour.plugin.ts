export const getTimes24HourPlugin = (str: string) => {
  const timePattern = /\b\d{2}:\d{2}\b/g;
  return str.match(timePattern) || [];
};

export default getTimes24HourPlugin;

export const description = `This plugin extracts all times in the 24-hour format (HH:MM) from a given string. It returns an array of matched times or an empty array if no matches are found. This is useful for parsing and analyzing text to identify time information specifically in the 24-hour format.`;

export const example = ``;
