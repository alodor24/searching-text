import { createContext } from "react";

export type SearchTextContextData = {
  searchText: string;
  count: number;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const SearchTextContext = createContext<SearchTextContextData | undefined>(
  undefined
);

export default SearchTextContext;
