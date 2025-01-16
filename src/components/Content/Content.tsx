import { useEffect, useMemo } from "react";
import "./Content.styles.css";
import { Text } from "../../utils/content";
import useSearchTextContext from "../../context/SearchTextContext/useSearchTextContext";
import { highlightText } from "./highlightText";

const Content = () => {
  const { searchText, setCount } = useSearchTextContext();

  const { highlightedParagraphs, totalMatches } = useMemo(() => {
    let matches = 0;

    const paragraphs = Text.map((paragraph) => {
      const { highlightedText, count } = highlightText(paragraph, searchText);
      matches += count;

      return highlightedText;
    });

    return { highlightedParagraphs: paragraphs, totalMatches: matches };
  }, [searchText]);

  useEffect(() => {
    setCount(totalMatches);
  }, [setCount, totalMatches]);

  return (
    <div className="content__container">
      {highlightedParagraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Content;
