import useGames from "../../hooks/useGames";
import GameCard from "../GameCard/GameCard";
import GameCardSkeleton from "../GameCardSkeleton/GameCardSkeleton";

const GameGrid = () => {
  const { games, error, loading } = useGames();

  const skeletonCards: number[] = new Array(8).fill(0).map((_, i) => i + 1);

  return (
    <main>
      {error && <p>{error}</p>}
      <ul className="auto-fit-columns">
        {loading &&
          skeletonCards.map((skel) => (
            <li key={skel}>
              <GameCardSkeleton />
            </li>
          ))}
        {games.map((game) => (
          <li key={game.id}>
            <GameCard game={game} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default GameGrid;
