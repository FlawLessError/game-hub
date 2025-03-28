import { AxiosRequestConfig } from "axios";
import apiClient, { FetchedData } from "./api-client";

class HttpClient<T> {
  constructor(public endPoint: string) {}

  getAll = (config?: AxiosRequestConfig) =>
    apiClient
      .get<FetchedData<T>>(this.endPoint, config)
      .then((res) => res.data);

  get = async (id: number | string) => {
    if (typeof id === "number") id = id.toString();
    const res = await apiClient.get<T>(this.endPoint + `/${id}`);
    return res.data;
  };
}

export default HttpClient;
