export const getHtmlTagsPlugin = (str: string) => {
  const htmlTagPattern = /<[^>]+>/g;
  return str.match(htmlTagPattern) || [];
};

export default getHtmlTagsPlugin;

export const description = `This plugin extracts all HTML tags from a given string, capturing any text enclosed within angle brackets (< >). It returns an array of matched HTML tags or an empty array if no matches are found. This is useful for parsing and analyzing HTML content to identify and extract all tag elements.`;

export const example = ``;
