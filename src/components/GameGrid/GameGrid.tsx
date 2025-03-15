import useGames from "../../hooks/useGames";
import GameCard from "../GameCard/GameCard";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <main>
      {error && <p>{error}</p>}
      <ul className="auto-fit-columns">
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
