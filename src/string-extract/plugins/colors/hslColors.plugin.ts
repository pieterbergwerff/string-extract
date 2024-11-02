export const hslColorsPlugin = (str: string) => {
  const hslColorPattern = /hsl\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)/g;
  const matches = [];
  let match;
  while ((match = hslColorPattern.exec(str)) !== null) {
    matches.push(`hsl(${match[1]}, ${match[2]}%, ${match[3]}%)`);
  }
  return matches;
};

export default hslColorsPlugin;

export const description =
  "This plugin extracts all HSL (Hue, Saturation, Lightness) color codes from a given string, capturing the hue, saturation, and lightness values. It returns an array of formatted HSL color strings or an empty array if no matches are found. This is particularly useful for parsing CSS or design-related content.";
