export const cptCodesPlugin = (str: string) => {
  const cptPattern = /\b\d{5}\b/g;
  return str.match(cptPattern) || [];
};

export default cptCodesPlugin;

export const description = `This plugin extracts all CPT (Current Procedural Terminology) codes from a given string, capturing the standard 5-digit format used for identifying medical procedures and services. It returns an array of matched CPT codes or an empty array if no matches are found. This is useful for parsing and analyzing text to identify medical billing and coding information.`;

export const example = ``;
