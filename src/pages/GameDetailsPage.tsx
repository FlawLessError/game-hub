import styles from "./GameDetailsPage.module.scss";

import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import GameAdditionalDetails from "../components/GameAdditionalDetails/GameAdditionalDetails";
import GameDetails from "../components/GameDetails/GameDetails";
import GameScreenShot from "../components/GameScreenShot/GameScreenShot";
import GameVideoTrailer from "../components/GameVideoTrailer/GameVideoTrailer";
import useGameDetails from "../hooks/useGameDetails";
import GameDetailsPageSkeleton from "./GameDetailsPageSkeleton";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data, error, isLoading } = useGameDetails(slug!);

  if (isLoading) return <GameDetailsPageSkeleton />;
  if (error) throw Error("An error occured!");

  return (
    <div className="container" data-type="wide">
      <Helmet>
        <title>{data?.name}</title>
        <meta property="og:title" content={data?.name} />
        <meta
          property="og:url"
          content={`${import.meta.env.VITE_APP_URL}/games/${data?.slug}`}
        />
        <meta property="og:image" content={data?.background_image} />
        <meta name="description" content={data?.description_raw} />
      </Helmet>

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
