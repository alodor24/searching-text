import "./Layout.styles.css";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main className="layout__wrapper">
      <section className="layout__container">{children}</section>
    </main>
  );
};

export default Layout;
