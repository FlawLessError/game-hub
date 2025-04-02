import styles from "./Layout.module.scss";

import { HelmetProvider } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

const Layout = () => {
  return (
    <HelmetProvider>
      <NavBar />
      <Outlet />
      <div className={styles.end}></div>
    </HelmetProvider>
  );
};

export default Layout;
