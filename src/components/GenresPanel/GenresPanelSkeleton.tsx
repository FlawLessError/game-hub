import styles from "./GenresPanelSkeleton.module.scss";

type Props = {
  className: string;
};

const GenresPanelSkeleton = ({ className }: Props) => {
  const genresShrouds = new Array(10).fill(0).map((_, i) => i + 1);

  return (
    <aside className={`${className} ${styles.panel} flow-content`}>
      <div className={styles.heading}></div>
      {genresShrouds.map((shroud) => (
        <div key={shroud} className={styles.genre}>
          <div className={styles.img}></div>
          <div className={styles.title}></div>
        </div>
      ))}
    </aside>
  );
};

export default GenresPanelSkeleton;
