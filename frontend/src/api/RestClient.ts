import axios, { AxiosInstance } from "axios";

export default class RestClient {
  public axios: AxiosInstance;

  constructor(baseUrl: string) {
    const csrfToken = (document.querySelector("meta[name=csrf-token]") as HTMLMetaElement).content;

    this.axios = axios.create({
      baseURL: baseUrl,
      timeout: 1000,
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": csrfToken
      }
    });

    // TODO: Productionではログを流さないようにする
    this.axios.interceptors.response.use(
      response => {
        const { config, data, status } = response;
        const { method, params, url } = config;

        console.group(`${method ? method.toUpperCase() : "undefined method"}:${status} - ${url}`);
        if (params) console.table(params);
        console.log(data);
        console.groupEnd();

        return response;
      },
      error => {
        console.log(error);
        return Promise.reject(error);
      }
    );
  }

  public async get<T>(
    path: string,
    params?: object,
    successed?: (res: object) => void,
    errored?: (res: object) => void,
    always: () => any = () => {}
  ) {
    try {
      const response = await this.axios.get<T>(path, { params });
      if (successed) successed(response);
      return response;
    } catch (error) {
      if (errored) errored(error);
      throw error;
    } finally {
      always();
    }
  }

  public async post<T>(
    path: string,
    params?: object,
    successed?: (res: object) => void,
    errored?: (res: object) => void,
    always: () => any = () => {}
  ) {
    try {
      const response = await this.axios.post<T>(path, params);
      if (successed) successed(response);
      return response;
    } catch (error) {
      if (errored) errored(error);
      throw error;
    } finally {
      always();
    }
  }

  public async delete<T>(
    path: string,
    params?: object,
    successed?: (res: object) => void,
    errored?: (res: object) => void,
    always: () => any = () => {}
  ) {
    try {
      const response = await this.axios.delete<T>(path, { data: { params } });
      if (successed) successed(response);
      return response;
    } catch (error) {
      if (errored) errored(error);
      throw error;
    } finally {
      always();
    }
  }
}
