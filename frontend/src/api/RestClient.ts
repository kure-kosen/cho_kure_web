import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

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

  public get<T>(
    path: string,
    params?: object,
    successed?: (res: object) => void,
    errored?: (res: object) => void,
    always: () => any = () => {}
  ) {
    return this.axios
      .get(path, { params })
      .then((result: AxiosResponse<T>) => {
        if (successed) successed(result);
        return result;
      })
      .catch((error: AxiosError) => {
        if (errored) errored(error);
      })
      .then(result => {
        always();
        if (result) return result.data;
        return result;
      });
  }

  public post(
    path: string,
    params: object,
    successed: (res: object) => void,
    errored: (res: object) => void,
    always: () => any = () => {}
  ) {
    return this.axios
      .post(path, params)
      .then((result: AxiosResponse) => {
        successed(result);
      })
      .catch((error: AxiosError) => {
        errored(error);
      })
      .then(always());
  }

  public delete(
    path: string,
    params: object,
    successed: (res: object) => void,
    errored: (res: object) => void,
    always: () => any = () => {}
  ) {
    return this.axios
      .delete(path, { data: { params } })
      .then((result: AxiosResponse) => {
        successed(result);
      })
      .catch((error: AxiosError) => {
        errored(error);
      })
      .then(always());
  }
}
