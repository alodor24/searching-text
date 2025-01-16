import { useState } from "react";
import { SearchTextContextData } from ".";

const useSearchTextContextValue = (): SearchTextContextData => {
  const [searchText, setSearchText] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  return {
    searchText,
    count,
    setSearchText,
    setCount,
  };
};

export default useSearchTextContextValue;
