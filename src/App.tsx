import Content from "./components/Content";
import Layout from "./components/Layout";
import Search from "./components/Search";

const App = () => {
  return (
    <Layout>
      <Search />
      <Content />
    </Layout>
  );
};

export default App;
