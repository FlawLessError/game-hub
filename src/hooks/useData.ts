import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { GameQueriesTypes } from "../store/gameQueries-slice";

type FetchedData<T> = {
  count: number;
  results: T[];
};

const useData = <T>(endPoint: string, gameQueries?: GameQueriesTypes) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .get<FetchedData<T>>(endPoint, {
        signal: controller.signal,
        params: {
          genres: gameQueries?.genre?.id,
          parent_platforms: gameQueries?.platform?.id,
          ordering: gameQueries?.sortOrder,
          search: gameQueries?.searchQuery,
        },
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
  }, [endPoint, gameQueries]);

  return { data, setData, error, setError, loading, setLoading };
};

export default useData;
