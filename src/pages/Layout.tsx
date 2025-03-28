import styles from "./Layout.module.scss";

import { Fragment } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

const Layout = () => {
  return (
    <Fragment>
      <NavBar />
      <Outlet />
      <div className={styles.end}></div>
    </Fragment>
  );
};

export default Layout;
