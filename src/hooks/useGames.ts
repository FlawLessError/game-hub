import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "../store/hooks";
import HttpClient from "../services/http-client";

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

const APIClient = new HttpClient<Game>("/games");

const useGames = () => {
  const gameQueries = useAppSelector((state) => state.gameQueries);

  return useQuery({
    queryKey: ["games", gameQueries],
    queryFn: () =>
      APIClient.getAll({
        params: {
          genres: gameQueries?.genre?.id,
          parent_platforms: gameQueries?.platform?.id,
          ordering: gameQueries?.sortOrder,
          search: gameQueries?.searchQuery,
        },
      }),
    staleTime: 10 * 60 * 1000,
  });
};

export default useGames;
