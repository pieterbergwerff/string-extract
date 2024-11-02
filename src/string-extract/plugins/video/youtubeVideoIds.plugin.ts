export const youTubeVideoIds = (str: string) => {
  const youtubePattern =
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/g;
  const matches = [];
  let match;
  while ((match = youtubePattern.exec(str)) !== null) {
    matches.push(match[1]);
  }
  return matches;
};

export const description = `This plugin extracts all YouTube video IDs from a given string, capturing the unique 11-character identifier used in YouTube URLs. It returns an array of matched video IDs or an empty array if no matches are found. This is useful for parsing and analyzing text to identify YouTube video links.`;

export const example = ``;
