import styles from "./GameCardSkeleton.module.scss";

const GameCardSkeleton = () => {
  return (
    <div className={styles.gameCard}>
      <div className={styles.img}></div>
      <div className={`${styles.info} flow-content`}>
        <div>
          <div className={styles.icons}>
            {[1, 2, 3].map((index) => (
              <div key={index}></div>
            ))}
          </div>
          <div className={styles.critic}></div>
        </div>
        <div className={styles.title}></div>
      </div>
    </div>
  );
};

export default GameCardSkeleton;
