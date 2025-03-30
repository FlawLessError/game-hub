import styles from "./NavBar.module.scss";

import { ComponentPropsWithoutRef } from "react";
import { NavHashLink } from "react-router-hash-link";
import Logo from "../../assets/Logo.svg";
import ColorModeSwitch from "../ColorModeSwitch/ColorModeSwitch";
import GamesSearchInput from "../GamesSearchInput/GamesSearchInput";
import { useAppDispatch } from "../../store/hooks";
import { changeSearchQuery } from "../../store/gameQueries-slice";

type Props = {
  className?: string;
} & ComponentPropsWithoutRef<"header">;

const NavBar = (props: Props) => {
  const dispatch = useAppDispatch();
  const navLinkHandler = () => {
    dispatch(changeSearchQuery(""));
  };

  return (
    <header
      {...props}
      className={`container ${styles.header} ${props.className}`}
      data-type="wide"
    >
      <NavHashLink to="/#" onClick={navLinkHandler} className={styles.logo}>
        <img src={Logo} alt="game hub logo" />
      </NavHashLink>
      <GamesSearchInput />
      <ColorModeSwitch />
    </header>
  );
};

export default NavBar;
