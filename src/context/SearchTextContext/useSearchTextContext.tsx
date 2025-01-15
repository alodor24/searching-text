import { useContext } from "react";
import SearchTextContext, { SearchTextContextData } from ".";

const useSearchTextContext = (): SearchTextContextData => {
  const searchTextContext = useContext(SearchTextContext);

  if (!searchTextContext) {
    throw new Error(
      "useSearchTextContext must be used within the SearchTextContext.Provider"
    );
  }

  return searchTextContext;
};

export default useSearchTextContext;
