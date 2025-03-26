import { AxiosRequestConfig } from "axios";
import apiClient, { FetchedData } from "./api-client";

class HttpClient<T> {
  constructor(public endPoint: string) {}

  getAll = (config?: AxiosRequestConfig) =>
    apiClient
      .get<FetchedData<T>>(this.endPoint, config)
      .then((res) => res.data);

  get = (id: number | string) => {
    if (typeof id === "number") id = id.toString();
    apiClient.get<T>(this.endPoint + `/${id}`).then((res) => res.data);
  };
}

export default HttpClient;
