import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data, error, isLoading } = useGameDetails(slug!);

  if (isLoading) return <p>Loading...</p>;
  if (error) throw Error("An error occured!");

  return (
    <div className="container" data-type="wide">
      <main>
        <h1>{data?.name}</h1>
        <p>{data?.description_raw}</p>
      </main>
    </div>
  );
};

export default GameDetailsPage;
