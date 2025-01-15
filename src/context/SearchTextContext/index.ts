import { createContext } from "react";

export type SearchTextContextData = {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};

const SearchTextContext = createContext<SearchTextContextData | undefined>(
  undefined
);

export default SearchTextContext;
