export const htmlDoctypesPlugin = (str: string) => {
  const htmlDoctypePattern = /<!DOCTYPE\s+[^>]+>/g;
  return str.match(htmlDoctypePattern) || [];
};

export default htmlDoctypesPlugin;

export const description = `This plugin extracts all HTML doctype declarations from a given string, capturing the text within each <!DOCTYPE ...> tag. It returns an array of matched doctype declarations or an empty array if no matches are found. This is useful for parsing and analyzing HTML content to identify the document type definitions used.`;

export const example = ``;
