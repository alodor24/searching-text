import "./Content.styles.css";
import { Text } from "../../utils/content";
import useSearchTextContext from "../../context/SearchTextContext/useSearchTextContext";
import { highlightText } from "./highlightText";

const Content = () => {
  const { searchText } = useSearchTextContext();

  return (
    <div className="content__container">
      {Text.map((paragraph, index) => (
        <p key={index}>{highlightText(paragraph, searchText)}</p>
      ))}
    </div>
  );
};

export default Content;
