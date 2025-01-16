export const highlightText = (text: string, highlight: string) => {
  if (!highlight.trim()) return { highlightedText: text, count: 0 };

  const regex = new RegExp(`(${highlight})`, "gi");
  const matches = text.match(regex);

  const highlightedText = text.split(regex).map((part, index) =>
    part.toLowerCase() === highlight.toLowerCase() ? (
      <span key={index} className="content__text-found">
        {part}
      </span>
    ) : (
      part
    )
  );

  return { highlightedText, count: matches ? matches.length : 0 };
};
