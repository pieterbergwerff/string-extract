export const fileExtensionsPlugin = (str: string) => {
  const fileExtensionPattern = /\b\.[a-zA-Z0-9]+\b/g;
  return str.match(fileExtensionPattern) || [];
};

export default fileExtensionsPlugin;

export const description = `This plugin extracts all file extensions from a given string, capturing the dot followed by alphanumeric characters. It returns an array of matched file extensions or an empty array if no matches are found. This is useful for parsing and analyzing text to identify file types based on their extensions.`;

export const example = ``;
