import styles from "./GameDetailsPageSkeleton.module.scss";

const GameDetailsPageSkeleton = () => {
  return (
    <div className="container" data-type="wide">
      <div className={styles.GameDetails}>
        <div className="flow-content">
          <div className={styles.heading}></div>
          <div className={styles.heading2}></div>
          <div className={styles.details}></div>
        </div>
        <div className={styles.video}></div>
      </div>
    </div>
  );
};

export default GameDetailsPageSkeleton;
