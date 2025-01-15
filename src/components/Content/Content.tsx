import "./Content.styles.css";
import { Text } from "../../utils/content";
import useSearchTextContext from "../../context/SearchTextContext/useSearchTextContext";

const Content = () => {
  const { searchText } = useSearchTextContext();

  console.log(searchText);

  return (
    <div className="content__container">
      {Text.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Content;
