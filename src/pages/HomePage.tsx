import styles from "./HomePage.module.scss";

import GameGrid from "../components/GameGrid/GameGrid";
import GenresPanel from "../components/GenresPanel/GenresPanel";
import SeoMeta from "../components/SeoMeta";

export default function HomePage() {
  return (
    <div className={`${styles.homePage} container`} data-type="wide">
      <SeoMeta
        title={"Game Hub"}
        description={
          "Search for your favorite game using game hub. You can discover news and all the information about other games aswell."
        }
        name={"FlawlessError"}
        type={"website"}
        img={"../assets/Logo.svg"}
      />
      <GenresPanel className={styles.aside} />
      <GameGrid className={styles.main} />
    </div>
  );
}
