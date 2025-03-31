import styles from "./GameVideoTrailer.module.scss";

import useGameTrailer from "../../hooks/useGameTrailer";
import GameTrailerSkeleton from "./GameVideoTrailerSkeleton";

type Props = {
  slug: string;
};

const GameVideoTrailer = ({ slug }: Props) => {
  const { data, error, isLoading } = useGameTrailer(slug);
  const trailers = data?.results || [];

  if (isLoading) return <GameTrailerSkeleton />;
  if (error || trailers?.length <= 0) return null;

  return (
    <div>
      <video>
        className={styles.video}
        controls src={trailers[0].data.max}
        poster={trailers[0].preview}
      </video>
    </div>
  );
};

export default GameVideoTrailer;
