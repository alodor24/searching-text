export const highlightText = (text: string, highlight: string) => {
  if (!highlight.trim()) return text;

  const regex = new RegExp(`(${highlight})`, "gi");

  return text.split(regex).map((part, index) =>
    part.toLowerCase() === highlight.toLowerCase() ? (
      <span key={index} className="content__text-found">
        {part}
      </span>
    ) : (
      part
    )
  );
};
