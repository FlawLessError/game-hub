import { useQuery } from "@tanstack/react-query";
import HttpClient from "../services/http-client";

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

const APIClient = new HttpClient<Platform>("/platforms/lists/parents");

const usePlatform = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: () => APIClient.getAll(),
    staleTime: 24 * 60 * 60 * 1000,
    gcTime: 60 * 1000,
  });
};

export default usePlatform;
