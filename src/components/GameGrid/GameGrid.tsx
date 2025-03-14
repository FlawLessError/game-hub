import useGames from "../../hooks/useGames";

const GameGrid = () => {
  const { games, setGames, error, setError } = useGames();

  return (
    <main>
      {error && <p>{error}</p>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </main>
  );
};

export default GameGrid;
