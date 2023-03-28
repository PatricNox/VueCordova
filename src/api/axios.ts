import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Api {
  protected api: AxiosInstance;

  public constructor(config?: AxiosRequestConfig) {
    this.api = axios.create(config);
  }

  public getUri(config?: AxiosRequestConfig): string {
    return this.api.getUri(config);
  }

  public request<T, R = AxiosResponse<T>>(
    config: AxiosRequestConfig,
  ): Promise<R> {
    return this.api.request(config);
  }

  public get<T, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.api.get(url, config);
  }

  public delete<T, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.api.delete(url, config);
  }

  public head<T, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.api.head(url, config);
  }

  public post<T, R = AxiosResponse<T>>(
    url: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.api.post(url, data, config);
  }

  public put<T, R = AxiosResponse<T>>(
    url: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.api.put(url, data, config);
  }

  public patch<T, R = AxiosResponse<T>>(
    url: string,
    data?: string,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.api.patch(url, data, config);
  }
}

export class AuthenticatedApi extends Api {
  constructor() {
    super();

    // Check if we are authenticated.
    this.api.interceptors.request.use(
      config => {
        config.headers["Accept"] = "application/json";
        const token = "";
        config.headers["Authorization"] = `Bearer ${token}`;
        const https = process.env.APP_ENV === "production" ? "https" : "http";
        config.url = `${https}://${process.env.VUE_APP_API_SERVICE_DOMAIN}`;
        console.log(config.url);

        return config;
      },
      error => {
        return Promise.reject(error);
      },
    );

    this.api.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        return Promise.reject(error);
      },
    );
  }
}
