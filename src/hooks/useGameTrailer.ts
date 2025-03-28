import { useQuery } from "@tanstack/react-query";
import { GameTrailer } from "../entities/GameTrailer";
import HttpClient from "../services/http-client";

const useGameTrailer = (slug: string) => {
  const APIClient = new HttpClient<GameTrailer>(`/games/${slug}/movies`);

  return useQuery({
    queryKey: ["trailer", slug],
    queryFn: () => APIClient.getAll(),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};

export default useGameTrailer;
