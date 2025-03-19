import styles from "./GameGrid.module.scss";

import useGames from "../../hooks/useGames";
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

  return (
    <main className={`${className} flow-content`}>
      <div className={styles.filters}>
        <PlatformSelect />
        <SortSelector />
      </div>
      {error && <p>{error}</p>}
      <ul className="auto-fill-columns">
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
