export const hexColorsPlugin = (str: string) => {
  const hexColorPattern = /#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})\b/g;
  return str.match(hexColorPattern) || [];
};

export default hexColorsPlugin;

export const description =
  "This plugin extracts all hexadecimal color codes from a given string, including both 6-digit and 3-digit formats. It returns an array of matched hex color codes or an empty array if no matches are found. This is useful for identifying color codes in CSS or HTML content.";
