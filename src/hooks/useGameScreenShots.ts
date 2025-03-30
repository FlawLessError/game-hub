import { useQuery } from "@tanstack/react-query";
import HttpClient from "../services/http-client";
import { GameScreenShot } from "../entities/GameScreenShot";

const useGameScreenShots = (slug: string) => {
  const APIClient = new HttpClient<GameScreenShot>(
    `/games/${slug}/screenshots`,
  );

  return useQuery({
    queryKey: ["screenshots", slug],
    queryFn: () => APIClient.getAll(),
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useGameScreenShots;
