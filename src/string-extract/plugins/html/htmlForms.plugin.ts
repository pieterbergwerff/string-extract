export const htmlFormsPlugin = (str: string) => {
  const htmlFormPattern = /<form\b[^>]*>([\s\S]*?)<\/form>/g;
  const matches = [];
  let match;
  while ((match = htmlFormPattern.exec(str)) !== null) {
    matches.push(match[1].trim());
  }
  return matches;
};

export default htmlFormsPlugin;

export const description = `This plugin extracts all form elements from a given string, capturing the content within each <form> tag. It returns an array of form contents or an empty array if no matches are found. This is useful for parsing and analyzing HTML content to identify and extract the structure and fields of forms.`;

export const example = ``;
