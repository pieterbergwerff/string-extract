export const icd10CodesPlugin = (str: string) => {
  const icd10Pattern = /\b[A-Z]\d{2}\.\d{1,4}\b/g;
  return str.match(icd10Pattern) || [];
};

export default icd10CodesPlugin;

export const description = `This plugin extracts all ICD-10 (International Classification of Diseases, 10th Revision) codes from a given string, capturing the standard format of a letter followed by two digits, a period, and one to four additional digits (e.g., A01.1, B23.45). It returns an array of matched ICD-10 codes or an empty array if no matches are found. This is useful for parsing and analyzing text to identify medical diagnosis codes.`;

export const example = ``;
