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
  const genreId = useAppSelector((state) => state.genre.genreId);
  const platformId = useAppSelector((state) => state.platform.platformId);

  return useData<Game>("/games", genreId, platformId);
};

export default useGames;
