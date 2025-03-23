import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchedData } from "../services/api-client";

export type Platforms = {
  id: number;
  name: string;
  slug: string;
};

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchedData<Platforms>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    gcTime: 60 * 1000,
  });
};

export default usePlatforms;
