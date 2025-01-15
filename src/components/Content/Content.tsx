import "./Content.styles.css";
import { Text } from "../../assets/content";

const Content = () => {
  return (
    <div className="content__container">
      {Text.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Content;
