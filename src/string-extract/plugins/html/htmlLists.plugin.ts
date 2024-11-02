export const htmlListsPlugin = (str: string) => {
  const htmlListPattern = /<ul>(.*?)<\/ul>|<ol>(.*?)<\/ol>/g;
  const matches = [];
  let match;
  while ((match = htmlListPattern.exec(str)) !== null) {
    matches.push(match[1] ? match[1].trim() : match[2].trim());
  }
  return matches;
};

export default htmlListsPlugin;

export const description = `This plugin extracts all unordered and ordered list elements from a given string, capturing the content within each <ul> and <ol> tag. It returns an array of list contents or an empty array if no matches are found. This is useful for parsing and analyzing HTML content to identify and extract the structure and items of lists.`;

export const example = ``;
