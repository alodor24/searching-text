import Content from "./components/Content";
import Layout from "./components/Layout";
import Search from "./components/Search";
import SearchTextContext from "./context/SearchTextContext";
import useSearchTextContextValue from "./context/SearchTextContext/useSearchTextContextValue";

const App = () => {
  const searchTextContextValue = useSearchTextContextValue();

  return (
    <Layout>
      <SearchTextContext.Provider value={searchTextContextValue}>
        <Search />
        <Content />
      </SearchTextContext.Provider>
    </Layout>
  );
};

export default App;
