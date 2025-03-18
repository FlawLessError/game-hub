import useGames from "../../hooks/useGames";
import { useAppSelector } from "../../store/hooks";
import GameCard from "../GameCard/GameCard";
import GameCardSkeleton from "../GameCardSkeleton/GameCardSkeleton";
import PlatformSelect from "../PlatformSelect/PlatformSelect";

type Props = {
  className: string;
};

const GameGrid = ({ className }: Props) => {
  const genreId = useAppSelector((state) => state.genreId);
  const { data, error, loading } = useGames(genreId);

  const skeletonCards: number[] = new Array(8).fill(0).map((_, i) => i + 1);

  return (
    <main className={`${className} flow-content`}>
      <PlatformSelect />
      {error && <p>{error}</p>}
      <ul className="auto-fit-columns">
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
