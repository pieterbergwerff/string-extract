export const rgbColorsPlugin = (str: string) => {
  const rgbColorPattern = /rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)/g;
  const matches = [];
  let match;
  while ((match = rgbColorPattern.exec(str)) !== null) {
    matches.push(`rgb(${match[1]}, ${match[2]}, ${match[3]})`);
  }
  return matches;
};

export default rgbColorsPlugin;

export const description =
  "This plugin extracts all RGB (Red, Green, Blue) color codes from a given string, capturing the red, green, and blue values. It returns an array of formatted RGB color strings or an empty array if no matches are found. This is useful for parsing CSS or design-related content where RGB colors are used.";
