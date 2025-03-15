import styles from "./CriticScore.module.scss";

type Props = {
  metacritic: number;
};

const CriticScore = ({ metacritic }: Props) => {
  return (
    <p
      className={styles.score}
      data-type={metacritic >= 70 ? "good" : metacritic >= 40 ? "ok" : "bad"}
    >
      {metacritic}
    </p>
  );
};

export default CriticScore;
