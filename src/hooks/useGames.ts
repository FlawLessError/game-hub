import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "../store/hooks";
import apiClient from "../services/api-client";
import { FetchedData } from "../services/api-client";

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

  return useQuery({
    queryKey: ["games", gameQueries],
    queryFn: () =>
      apiClient
        .get<FetchedData<Game>>("/games", {
          params: {
            genres: gameQueries?.genre?.id,
            parent_platforms: gameQueries?.platform?.id,
            ordering: gameQueries?.sortOrder,
            search: gameQueries?.searchQuery,
          },
        })
        .then((res) => res.data),
    staleTime: 10 * 60 * 1000,
  });
};

export default useGames;
