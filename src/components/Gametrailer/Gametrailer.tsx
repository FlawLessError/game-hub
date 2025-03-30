import styles from "./GameTrailer.module.scss";

import useGameTrailer from "../../hooks/useGameTrailer.ts";
import GameTrailerSkeleton from "./GameTrailerSkeleton";

type Props = {
  slug: string;
};

const GameTrailer = ({ slug }: Props) => {
  const { data, isLoading, error } = useGameTrailer(slug);

  if (isLoading) return <GameTrailerSkeleton />;
  if (error || data!.results.length <= 0) return null;

  return (
    <div>
      <video
        className={styles.video}
        controls
        src={data?.results[0].data.max}
        poster={data?.results[0].preview}
      ></video>
    </div>
  );
};

export default GameTrailer;
