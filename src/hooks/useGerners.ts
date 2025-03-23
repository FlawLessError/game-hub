import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchedData } from "../services/api-client";

type Genres = {
  id: number;
  name: string;
  image_background: string;
};

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchedData<Genres>>("/genres").then((res) => res.data),
    staleTime: Infinity,
    gcTime: 60 * 1000, // 1min
  });
};

export default useGenres;
