import styles from "./GameDetails.module.scss";
import ExpendableText from "../ExpendableText/ExpendableText";

type Props = {
  data: Game;
};

const GameDetails = ({ data }: Props) => {
  return (
    <div className={styles.details}>
      <h1 className={styles.heading}>{data?.name}</h1>
      <div className="flow-content">
        <h2 className={styles.heading2}>About</h2>
        <ExpendableText children={data?.description_raw || ""} />
      </div>
    </div>
  );
};

export default GameDetails;
