import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

type GameDetailsType = {
  id: number;
  name: string;
  description_raw: string;
};

const useGameDetails = (slug: string) => {
  return useQuery({
    queryKey: ["game", slug],
    queryFn: () =>
      apiClient.get<GameDetailsType>(`/games/${slug}`).then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};

export default useGameDetails;
