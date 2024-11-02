export const uuidsPlugin = (str: string) => {
  const uuidPattern =
    /\b[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}\b/g;
  return str.match(uuidPattern) || [];
};

export default uuidsPlugin;

export const description = `This plugin extracts all UUIDs (Universally Unique Identifiers) from a given string, capturing the standard format of 8-4-4-4-12 hexadecimal characters. It returns an array of matched UUIDs or an empty array if no matches are found. This is useful for parsing and analyzing text to identify unique identifiers used in various applications.`;

export const example = ``;
