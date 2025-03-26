import { useQuery } from "@tanstack/react-query";
import { Game } from "../entities/Game";
import apiClient from "../services/api-client";

const useGameDetails = (slug: string) => {
  return useQuery({
    queryKey: ["game", slug],
    queryFn: () =>
      apiClient.get<Game>(`/games/${slug}`).then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};

export default useGameDetails;
