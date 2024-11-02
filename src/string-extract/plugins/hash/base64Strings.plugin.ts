export const base64StringsPlugin = (str: string) => {
  const base64Pattern = /\b[A-Za-z0-9+/=]{4,}\b/g;
  return str.match(base64Pattern) || [];
};

export default base64StringsPlugin;

export const description = `This plugin extracts all Base64 encoded strings from a given string, capturing sequences of characters that match the Base64 format. It returns an array of matched Base64 strings or an empty array if no matches are found. This is useful for parsing and analyzing text to identify encoded data.`;

export const example = ``;
