export const mimeTypesPlugin = (str: string) => {
  const mimeTypePattern = /\b[a-zA-Z0-9.-]+\/[a-zA-Z0-9.-]+\b/g;
  return str.match(mimeTypePattern) || [];
};

export default mimeTypesPlugin;

export const description = `This plugin extracts all MIME types from a given string, capturing the type and subtype separated by a slash (e.g., text/html, image/png). It returns an array of matched MIME types or an empty array if no matches are found. This is useful for parsing and analyzing text to identify different media types.`;

export const example = ``;
