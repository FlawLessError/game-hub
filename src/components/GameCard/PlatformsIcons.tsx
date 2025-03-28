import styles from "./PlatformsIcons.module.scss";

import { FaWindows } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";
import { FaPlaystation } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { ReactNode } from "react";

type Props = {
  platforms: { slug: string }[];
};

const PlatformsIcons = ({ platforms }: Props) => {
  const icon: { [key: string]: ReactNode } = {
    pc: <FaWindows />,
    web: <FaEarthAfrica />,
    playstation: <FaPlaystation />,
    xbox: <FaXbox />,
    mac: <FaApple />,
    linux: <FaLinux />,
    ios: <FaAppStoreIos />,
    android: <FaAndroid />,
    nintendo: <BsNintendoSwitch />,
  };

  if (!platforms) return null;

  if (platforms.length > 4) {
    const remains = platforms.length - 4;
    platforms = platforms.slice(0, 4);
    return (
      <div className={styles.iconList}>
        {platforms.map(({ slug }) => (
          <div key={slug}>{icon[slug]}</div>
        ))}
        <p>+{remains}</p>
      </div>
    );
  }

  return (
    <div className={styles.iconList}>
      {platforms.map(({ slug }) => (
        <div key={slug}>{icon[slug]}</div>
      ))}
    </div>
  );
};

export default PlatformsIcons;
