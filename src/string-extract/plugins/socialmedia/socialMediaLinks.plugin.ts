export const socialMediaLinksPlugin = (str: string) => {
  const socialMediaPattern =
    /\b(?:https?:\/\/)?(?:www\.)?(facebook|twitter|instagram|linkedin)\.com\/[A-Za-z0-9_.-]+/g;
  return str.match(socialMediaPattern) || [];
};

export default socialMediaLinksPlugin;

export const description = `This plugin extracts all social media profile links from a given string, capturing URLs from platforms like Facebook, Twitter, Instagram, and LinkedIn. It returns an array of matched social media links or an empty array if no matches are found. This is useful for parsing and analyzing text to identify social media profiles.`;

export const example = ``;
