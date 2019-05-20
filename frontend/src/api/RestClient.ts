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
  }

  public get(
    path: string,
    params?: object,
    successed?: (res: object) => void,
    errored?: (res: object) => void,
    always: () => any = () => {}
  ) {
    return this.axios
      .get(path, { params })
      .then((result: AxiosResponse) => {
        console.log(`GET ${result.config.url}`);
        if (params) console.table(params);
        console.log(`status: ${result.status}, statusText: ${result.statusText}`);
        if (successed) successed(result);
      })
      .catch((error: AxiosError) => {
        console.log(`ERROR! GET ${error.config.url}`);
        if (params) console.table(params);
        console.log(`error: ${JSON.stringify(error)}`);
        if (errored) errored(error);
      })
      .then(always());
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
        console.log(`POST ${result.config.url}`);
        if (params) console.table(params);
        console.log(`status: ${result.status}, statusText: ${result.statusText}`);
        successed(result);
      })
      .catch((error: AxiosError) => {
        console.log(`ERROR! POST ${error.config.url}`);
        if (params) console.table(params);
        console.log(`error: ${error}`);
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
        console.log(`DELETE ${result.config.url}`);
        if (params) console.table(params);
        console.log(`status: ${result.status}, statusText: ${result.statusText}`);
        successed(result);
      })
      .catch((error: AxiosError) => {
        console.log(`ERROR! DELETE ${error.config.url}`);
        if (params) console.table(params);
        console.log(`error: ${error}`);
        errored(error);
      })
      .then(always());
  }
}
