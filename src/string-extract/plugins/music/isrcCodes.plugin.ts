export const isrcCodesPlugin = (str: string) => {
  const isrcPattern = /\b[A-Z]{2}-[A-Z0-9]{3}-\d{2}-\d{5}\b/g;
  return str.match(isrcPattern) || [];
};

export default isrcCodesPlugin;

export const description = `This plugin extracts all ISRC (International Standard Recording Code) identifiers from a given string, capturing the standard format used for identifying sound recordings (e.g., US-ABC-12-34567). It returns an array of matched ISRC codes or an empty array if no matches are found. This is useful for parsing and analyzing text to identify music recording identifiers.`;

export const example = ``;
