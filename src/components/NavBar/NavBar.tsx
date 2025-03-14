import styles from "./NavBar.module.scss";

import { NavHashLink } from "react-router-hash-link";
import Logo from "../../assets/Logo.svg";
import { ComponentPropsWithoutRef } from "react";
import ColorModeSwitch from "../ColorModeSwitch/ColorModeSwitch";

type Props = {
  className?: string;
} & ComponentPropsWithoutRef<"header">;

const NavBar = (props: Props) => {
  return (
    <header {...props} className={`${styles.header} ${props.className}`}>
      <NavHashLink to="/#" className={styles.logo}>
        <img src={Logo} alt="game hub logo" />
      </NavHashLink>
      <ColorModeSwitch />
    </header>
  );
};

export default NavBar;
