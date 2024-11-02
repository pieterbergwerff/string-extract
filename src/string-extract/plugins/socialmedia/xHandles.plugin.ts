export const XHandlesPlugin = (str: string) => {
  const xHandlePattern = /@[A-Za-z0-9_]+/g;
  return str.match(xHandlePattern) || [];
};

export default XHandlesPlugin;

export const description = `This plugin extracts all X (formerly Twitter) handles from a given string, capturing words or phrases prefixed with the @ symbol. It returns an array of matched handles or an empty array if no matches are found. This is useful for parsing and analyzing text to identify user mentions on the X platform.`;

export const example = ``;
