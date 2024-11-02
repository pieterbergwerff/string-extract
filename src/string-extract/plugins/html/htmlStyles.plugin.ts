export const htmlStylesPlugin = (str: string) => {
  const htmlStylePattern = /<style\b[^>]*>([\s\S]*?)<\/style>/g;
  const matches = [];
  let match;
  while ((match = htmlStylePattern.exec(str)) !== null) {
    matches.push(match[1].trim());
  }
  return matches;
};

export const description = `This plugin extracts all style elements from a given string, capturing the content within each <style> tag. It returns an array of style contents or an empty array if no matches are found. This is useful for parsing and analyzing HTML content to identify and extract CSS code embedded in the document.`;

export const example = ``;
