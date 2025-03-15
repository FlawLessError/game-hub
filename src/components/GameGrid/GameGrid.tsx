import useGames from "../../hooks/useGames";
import GameCard from "../GameCard/GameCard";

const GameGrid = () => {
  const { games, setGames, error, setError } = useGames();

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
