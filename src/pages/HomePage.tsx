import styles from "./HomePage.module.scss";

import GameGrid from "../components/GameGrid/GameGrid";
import GenresPanel from "../components/GenresPanel/GenresPanel";

export default function HomePage() {
  return (
    <div className={`${styles.homePage} container`} data-type="wide">
      <GenresPanel className={styles.aside} />
      <GameGrid className={styles.main} />
    </div>
  );
}
