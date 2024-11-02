export const markdownLinksPlugin = (str: string) => {
  const markdownLinkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  const matches = [];
  let match;
  while ((match = markdownLinkPattern.exec(str)) !== null) {
    matches.push({ text: match[1], url: match[2] });
  }
  return matches;
};

export default markdownLinksPlugin;

export const description = `This plugin extracts all Markdown link syntax from a given string, capturing the link text and URL of each link. It returns an array of objects, each containing the link text and URL, or an empty array if no matches are found. This is useful for parsing and analyzing Markdown content to identify and extract hyperlink references.`;

export const example = ``;
