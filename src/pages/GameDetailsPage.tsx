import styles from "./GameDetailsPage.module.scss";

import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails.ts";
import GameAdditionalDetails from "../components/GameAdditionalDetails/GameAdditionalDetails.tsx";
import GameDetails from "../components/GameDetails/GameDetails.tsx";
import GameDetailsPageSkeleton from "./GameDetailsPageSkeleton.tsx";
import GameScreenShot from "../components/GameScreenShot/GameScreenShot.tsx";
import GameTrailer from "../components/GameTrailer/GameTrailer.tsx";

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
