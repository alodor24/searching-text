import HeartIcon from "../../assets/heart-icon.svg";
import "./Footer.styles.css";

const Footer = () => {
  return (
    <footer className="footer__wrapper">
      <p className="footer__text">
        Desarrollado con{" "}
        <img className="footer__icon" src={HeartIcon} alt="heart-icon" /> por{" "}
        <a
          className="footer__anchor"
          href="https://alodor.vercel.app/"
          target="_blank"
        >
          Alodor
        </a>
      </p>
    </footer>
  );
};

export default Footer;
