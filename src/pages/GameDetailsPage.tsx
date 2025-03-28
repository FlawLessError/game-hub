import styles from "./GameDetailsPage.module.scss";

import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import GameTrailer from "../components/GameTrailer/GameTrailer";
import GameAdditionalDetails from "../components/GameAdditionalDetails/GameAdditionalDetails";
import GameDetails from "../components/GameDetails/GameDetails";
import GameDetailsPageSkeleton from "./GameDetailsPageSkeleton";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data, error, isLoading } = useGameDetails(slug!);

  if (isLoading) return <GameDetailsPageSkeleton />;
  if (error) throw Error("An error occured!");

  return (
    <div className="container" data-type="wide">
      <main className={`${styles.GameDetails} flow-content`}>
        <div className={styles.firstSpliter}>
          {data && <GameDetails data={data} />}
          {data && <GameTrailer slug={data.slug} />}
        </div>

        <GameAdditionalDetails {...data!} />
      </main>
    </div>
  );
};

export default GameDetailsPage;
