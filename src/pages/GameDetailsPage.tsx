import styles from "./GameDetailsPage.module.scss";

import { useParams } from "react-router-dom";
import ExpendableText from "../components/ExpendableText/ExpendableText";
import useGameDetails from "../hooks/useGameDetails";
import GameDetails from "../components/GameDetails/GameDetails";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data, error, isLoading } = useGameDetails(slug!);

  if (isLoading) return <p>Loading...</p>;
  if (error) throw Error("An error occured!");

  return (
    <div className="container" data-type="wide">
      <main className={`${styles.GameDetails} flow-content `}>
        <h1 className={styles.heading}>{data?.name}</h1>
        <h2 className={styles.heading2}>About</h2>
        <ExpendableText children={data?.description_raw || ""} />
        <GameDetails {...data!} />
      </main>
    </div>
  );
};

export default GameDetailsPage;
