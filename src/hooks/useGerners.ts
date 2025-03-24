import { useQuery } from "@tanstack/react-query";
import HttpClient from "../services/http-client";

type Genres = {
  id: number;
  name: string;
  image_background: string;
};

const APIClient = new HttpClient<Genres>("/genres");

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () => APIClient.getAll(),
    staleTime: Infinity,
    gcTime: 60 * 1000, // 1min
  });
};

export default useGenres;
