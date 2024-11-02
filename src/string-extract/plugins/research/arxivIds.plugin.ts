export const arxivIdsPlugin = (str: string) => {
  const arxivPattern = /\barXiv:\d{4}\.\d{4,5}\b/g;
  return str.match(arxivPattern) || [];
};

export default arxivIdsPlugin;

export const description = `This plugin extracts all arXiv identifiers from a given string, capturing the standard format used for preprint articles (e.g., arXiv:1234.56789). It returns an array of matched arXiv IDs or an empty array if no matches are found. This is useful for parsing and analyzing text to identify references to academic papers on arXiv.`;

export const example = ``;
