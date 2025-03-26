import { useInfiniteQuery } from "@tanstack/react-query";
import { Game } from "../entities/Game";
import HttpClient from "../services/http-client";
import { useAppSelector } from "../store/hooks";

const APIClient = new HttpClient<Game>("/games");

const useGames = () => {
  const gameQueries = useAppSelector((state) => state.gameQueries);

  return useInfiniteQuery({
    queryKey: ["games", gameQueries],
    queryFn: ({ pageParam }) =>
      APIClient.getAll({
        params: {
          genres: gameQueries?.genreId,
          parent_platforms: gameQueries?.platformId,
          ordering: gameQueries?.sortOrder,
          search: gameQueries?.searchQuery,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      if (!lastPage.next) return undefined;
      return lastPageParam + 1;
    },
    staleTime: 10 * 60 * 1000,
  });
};

export default useGames;
