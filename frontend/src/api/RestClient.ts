export default class RestClient {
  public axios: any;

  constructor(baseUrl: string) {
    const axiosBase = require("axios");
    const csrfToken = (document.querySelector("meta[name=csrf-token]") as HTMLMetaElement).content;

    this.axios = axiosBase.create({
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
    params: object,
    successed: (res: object) => void,
    errored: (res: object) => void,
    always = () => {}
  ) {
    return this.axios
      .get(path, { params })
      .then((result: object) => {
        console.log(`GET ${this.axios.baseURL}/${path}`);
        console.log(`result: ${JSON.stringify(result)}`);
        successed(result);
      })
      .catch((error: object) => {
        console.log(`ERROR! GET ${this.axios.baseURL}/${path}`);
        console.log(`error: ${JSON.stringify(error)}`);
        errored(error);
      })
      .then(always());
  }

  public post(
    path: string,
    params: object,
    successed: (res: object) => void,
    errored: (res: object) => void,
    always = () => {}
  ) {
    return this.axios
      .post(path, params)
      .then((result: object) => {
        console.log(`POST ${this.axios.baseURL}/${path}`);
        console.log(`result: ${result}`);
        successed(result);
      })
      .catch((error: object) => {
        console.log(`ERROR! POST ${this.axios.baseURL}/${path}`);
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
    always = () => {}
  ) {
    return this.axios
      .delete(path, { data: { params } })
      .then((result: object) => {
        console.log(`DELETE ${this.axios.baseURL}/${path}`);
        console.log(`result: ${result}`);
        successed(result);
      })
      .catch((error: object) => {
        console.log(`ERROR! DELETE ${this.axios.baseURL}/${path}`);
        console.log(`error: ${error}`);
        errored(error);
      })
      .then(always());
  }
}
