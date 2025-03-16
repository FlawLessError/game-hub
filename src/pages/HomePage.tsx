import GameGrid from "../components/GameGrid/GameGrid";
import GenresPanel from "../components/GenresPanel/GenresPanel";
import NavBar from "../components/NavBar/NavBar";
import styles from "./HomePage.module.scss";

export default function HomePage() {
  return (
    <div className={`${styles.homePage} container`} data-type="wide">
      <NavBar className={styles.header} />
      <GenresPanel className={styles.aside} />
      <GameGrid className={styles.main} />
    </div>
  );
}
