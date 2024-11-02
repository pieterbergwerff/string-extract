export const ipv6AddressesPlugin = (str: string) => {
  const ipv6Pattern = /(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}/g;
  return str.match(ipv6Pattern) || [];
};

export default ipv6AddressesPlugin;

export const description = `This plugin extracts all IPv6 addresses from a given string, capturing the standard format of eight groups of four hexadecimal digits separated by colons. It returns an array of matched IPv6 addresses or an empty array if no matches are found. This is useful for parsing and analyzing text to identify IPv6 addresses used in networking.`;

export const example = ``;
