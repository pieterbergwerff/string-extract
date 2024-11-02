export const cssKeyframesPlugin = (str: string) => {
  const cssKeyframePattern = /@keyframes\s+([a-zA-Z0-9_-]+)\s*{/g;
  const matches = [];
  let match;
  while ((match = cssKeyframePattern.exec(str)) !== null) {
    matches.push(match[1]);
  }
  return matches;
};

export default cssKeyframesPlugin;

export const description = `This plugin extracts all CSS keyframe names from a given string, capturing the names defined in @keyframes rules. It returns an array of keyframe names or an empty array if no matches are found. This is useful for parsing and analyzing CSS animations to identify all keyframe definitions used.`;

export const example = ``;
