export const imagesPlugin = (str: string) => {
  const imageUrlPattern =
    /(https?:\/\/[^\s]+?\.(?:png|jpg|jpeg|gif|svg|webp)|\/[^\s]+?\.(?:png|jpg|jpeg|gif|svg|webp))/gi;
  return str.match(imageUrlPattern) || [];
};

export default imagesPlugin;

export const description = `This plugin extracts all image URLs from a given string, capturing both absolute and relative URLs that end with common image file extensions (such as png, jpg, jpeg, gif, svg, and webp). It returns an array of matched image URLs or an empty array if no matches are found. This is useful for parsing and analyzing text to identify image references in various formats.`;

export const example = ``;
