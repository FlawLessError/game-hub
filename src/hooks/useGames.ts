import { useAppSelector } from "../store/hooks";
import useData from "./useData";

export type Game = {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  parent_platforms: {
    platform: {
      slug: string;
    };
  }[];
};

const useGames = () => {
  const gameQueries = useAppSelector((state) => state.gameQueries);

  return useData<Game>("/games", gameQueries);
};

export default useGames;
