import { useQuery } from "@tanstack/react-query";
import { Platform } from "../entities/Platform";
import HttpClient from "../services/http-client";

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
