import "./Search.styles.css";
import SearchIcon from "../../assets/search-icon.svg";
import useSearchTextContext from "../../context/SearchTextContext/useSearchTextContext";

const Search = () => {
  const { setSearchText, count } = useSearchTextContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchText(event.target.value);

  return (
    <div className="search__container">
      <img className="search__icon" src={SearchIcon} alt="search-icon" />
      <input
        className="search__input"
        type="search"
        placeholder="Buscar texto"
        onChange={handleChange}
      />

      <div className="search__container_result">
        {count > 0 && (
          <span className="search__result">
            {count > 1 ? `${count} resultados` : `${count} resultado`}
          </span>
        )}
      </div>
    </div>
  );
};

export default Search;
