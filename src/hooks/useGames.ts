import { GenreType } from "../store/genre-slice";
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

const useGames = (genreId: GenreType) => {
  return useData<Game>("/games", genreId);
};

export default useGames;
