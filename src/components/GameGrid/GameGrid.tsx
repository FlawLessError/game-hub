import styles from "./GameGrid.module.scss";

import useGames from "../../hooks/useGames";
import DynamicHeading from "../DynamicHeading/DynamicHeading";
import GameCard from "../GameCard/GameCard";
import GameCardSkeleton from "../GameCardSkeleton/GameCardSkeleton";
import PlatformSelect from "../PlatformSelect/PlatformSelect";
import SortSelector from "../SortSelector/SortSelector";

type Props = {
  className: string;
};

const GameGrid = ({ className }: Props) => {
  const { data, error, loading } = useGames();

  const skeletonCards: number[] = new Array(8).fill(0).map((_, i) => i + 1);

  if (error) return <h1 className={styles.error}>{error}</h1>;

  return (
    <main className={`${className} flow-content`}>
      <DynamicHeading />
      <div className={styles.filters}>
        <PlatformSelect />
        <SortSelector />
      </div>
      <ul className={`auto-fill-columns ${styles.ul}`}>
        {loading &&
          skeletonCards.map((skel) => (
            <li key={skel}>
              <GameCardSkeleton />
            </li>
          ))}
        {!loading &&
          data.map((game) => (
            <li key={game.id}>
              <GameCard game={game} />
            </li>
          ))}
      </ul>
    </main>
  );
};

export default GameGrid;
