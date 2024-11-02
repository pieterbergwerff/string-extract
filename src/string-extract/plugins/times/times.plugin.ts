export const timesPlugin = (str: string) => {
  const timePattern = /\b\d{1,2}:\d{2}(?:[:]\d{2})?(?:\s?[APMapm]{2})?\b/g;
  return str.match(timePattern) || [];
};

export default timesPlugin;

export const description = `This plugin extracts all time formats from a given string, capturing times in both 12-hour and 24-hour formats, with optional seconds and AM/PM notation. It returns an array of matched times or an empty array if no matches are found. This is useful for parsing and analyzing text to identify time information in various formats.`;

export const example = ``;
