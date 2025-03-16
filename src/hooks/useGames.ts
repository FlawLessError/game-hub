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
  return useData<Game>("/games");
};

export default useGames;
