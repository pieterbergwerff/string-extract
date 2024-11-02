export const filePathsPlugin = (str: string) => {
  const filePathPattern = /(?:[a-zA-Z]:)?(\\[a-zA-Z0-9_.-]+)+\\?/g;
  return str.match(filePathPattern) || [];
};

export default filePathsPlugin;

export const description = `This plugin extracts all file paths from a given string, capturing both absolute and relative paths in Windows format. It returns an array of matched file paths or an empty array if no matches are found. This is useful for parsing and analyzing text to identify file locations.`;

export const example = ``;
