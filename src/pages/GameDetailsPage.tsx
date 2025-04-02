import styles from "./GameDetailsPage.module.scss";

import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import GameAdditionalDetails from "../components/GameAdditionalDetails/GameAdditionalDetails";
import GameDetails from "../components/GameDetails/GameDetails";
import GameDetailsPageSkeleton from "./GameDetailsPageSkeleton";
import GameScreenShot from "../components/GameScreenShot/GameScreenShot";
import GameVideoTrailer from "../components/GameVideoTrailer/GameVideoTrailer";
import GameMetaData from "./GameMetaData";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data, error, isLoading } = useGameDetails(slug!);

  if (isLoading) return <GameDetailsPageSkeleton />;
  if (error) throw Error("An error occured!");

  return (
    <div className="container" data-type="wide">
      <GameMetaData data={data!} />

      <main className={`${styles.GameDetails} flow-content`}>
        <div className={styles.firstSpliter}>
          {data && <GameDetails data={data} />}
          {data && <GameVideoTrailer slug={data.slug} />}
        </div>

        <div className={styles.secondSpliter}>
          <GameAdditionalDetails {...data!} />
          <GameScreenShot slug={slug!} />
        </div>
      </main>
    </div>
  );
};

export default GameDetailsPage;
