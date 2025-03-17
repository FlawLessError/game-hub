import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { GenreType } from "../store/genre-slice";

type FetchedData<T> = {
  count: number;
  results: T[];
};

const useData = <T>(endPoint: string, genreId?: GenreType) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .get<FetchedData<T>>(endPoint, {
        signal: controller.signal,
        params: { genres: genreId },
      })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return null;
        setError(err.message);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [endPoint, genreId]);

  return { data, setData, error, setError, loading, setLoading };
};

export default useData;
