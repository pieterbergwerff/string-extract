export const hashtagsPlugin = (str: string) => {
  const hashtagPattern = /#[A-Za-z0-9_]+/g;
  return str.match(hashtagPattern) || [];
};

export default hashtagsPlugin;

export const description = `This plugin extracts all hashtags from a given string, capturing words or phrases prefixed with the # symbol. It returns an array of matched hashtags or an empty array if no matches are found. This is useful for parsing and analyzing text to identify hashtags commonly used in social media posts.`;

export const example = ``;
