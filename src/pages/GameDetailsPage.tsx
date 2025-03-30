import styles from "./GameDetailsPage.module.scss";

import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import GameTrailer from "../components/GameTrailer/GameTrailer";
import GameAdditionalDetails from "../components/GameAdditionalDetails/GameAdditionalDetails";
import GameDetails from "../components/GameDetails/GameDetails";
import GameDetailsPageSkeleton from "./GameDetailsPageSkeleton";
import GameScreenShot from "../components/GameScreenShot/GameScreenShot";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data, error, isLoading } = useGameDetails(slug!);

  if (isLoading) return <GameDetailsPageSkeleton />;
  if (error) throw Error("An error occured!");

  // const onSetVisible = () => {};

  return (
    <div className="container" data-type="wide">
      <main className={`${styles.GameDetails} flow-content`}>
        <div className={styles.firstSpliter}>
          {data && <GameDetails data={data} />}
          {data && <GameTrailer slug={data.slug} />}
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
