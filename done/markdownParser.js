/**
 * Converts markdown headers to HTML.
 *
 * @param {string} markdown - The input markdown string.
 * @returns {string} The markdown with headers converted to HTML.
 */
const markdownParser = (markdown) => {
  if (markdown.length === 0) {
    return markdown;
  }

  let trimmedMarkdown = markdown.trim();
  let hashCounter = 0;
  for (let i = 0; i < trimmedMarkdown.length; i++) {
    //     console.log(trimmedMarkdown[i]);
    if (trimmedMarkdown[i] === "#") {
      hashCounter++;
    } else {
      if (trimmedMarkdown[hashCounter] === " " && hashCounter <= 6) {
        return (
          "<h" +
          hashCounter +
          ">" +
          trimmedMarkdown.substring(hashCounter + 1).trim() +
          "</h" +
          hashCounter +
          ">"
        );
      }
      return trimmedMarkdown;
    }
  }
};
