import { AxiosRequestConfig } from "axios";
import apiClient, { FetchedData } from "./api-client";

class HttpClient<T> {
  constructor(public endPoint: string) {}

  getAll = (config?: AxiosRequestConfig) =>
    apiClient
      .get<FetchedData<T>>(this.endPoint, config)
      .then((res) => res.data);
}

export default HttpClient;
