import { useState } from "react";
import { SearchTextContextData } from ".";

const useSearchTextContextValue = (): SearchTextContextData => {
  const [searchText, setSearchText] = useState<string>("");

  return {
    searchText,
    setSearchText,
  };
};

export default useSearchTextContextValue;
