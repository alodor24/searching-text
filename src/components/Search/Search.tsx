import "./Search.styles.css";
import SearchIcon from "../../assets/search-icon.svg";

const Search = () => {
  return (
    <div className="search__container">
      <img className="search__icon" src={SearchIcon} alt="search-icon" />
      <input
        className="search__input"
        type="search"
        placeholder="Buscar texto"
      />
    </div>
  );
};

export default Search;
