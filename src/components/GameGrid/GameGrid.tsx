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
  const { data, error, isLoading } = useGames();

  const skeletonCards: number[] = new Array(8).fill(0).map((_, i) => i + 1);

  if (error) return <h1 className={styles.error}>{error.message}</h1>;

  return (
    <main className={`${className} flow-content`}>
      <DynamicHeading />
      <div className={styles.filters}>
        <PlatformSelect />
        <SortSelector />
      </div>
      <ul className={`auto-fill-columns`}>
        {isLoading &&
          skeletonCards.map((skel) => (
            <li key={skel}>
              <GameCardSkeleton />
            </li>
          ))}
        {!isLoading &&
          data?.results.map((game) => (
            <li key={game.id}>
              <GameCard game={game} />
            </li>
          ))}
      </ul>
    </main>
  );
};

export default GameGrid;
