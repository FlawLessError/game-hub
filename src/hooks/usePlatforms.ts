import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchedData } from "../services/api-client";

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

const usePlatform = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchedData<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    gcTime: 60 * 1000,
  });
};

export default usePlatform;
