import styles from "./NavBar.module.scss";

import { ComponentPropsWithoutRef } from "react";
import { useNavigate } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import Logo from "../../assets/Logo.svg";
import ColorModeSwitch from "../ColorModeSwitch/ColorModeSwitch";
import GamesSearchInput from "../GamesSearchInput/GamesSearchInput";

type Props = {
  className?: string;
} & ComponentPropsWithoutRef<"header">;

const NavBar = (props: Props) => {
  const navigate = useNavigate();

  return (
    <header {...props} className={`${styles.header} ${props.className}`}>
      <NavHashLink to="/#" onClick={() => navigate(0)} className={styles.logo}>
        <img src={Logo} alt="game hub logo" />
      </NavHashLink>
      <GamesSearchInput />
      <ColorModeSwitch />
    </header>
  );
};

export default NavBar;
