export default class RestClient {
  axios: any;

  constructor() {
    const axiosBase = require("axios");
    const csrfToken = (<HTMLMetaElement>document.querySelector("meta[name=csrf-token]")).content;

    this.axios = axiosBase.create({
      baseURL: "http://localhost:3000", // TODO(euglena1215): productionとの切り替え方法を考える
      timeout: 1000,
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": csrfToken,
      },
    });
  }

  get(
    path: string,
    params: object,
    successed: (res: object) => void,
    errored: (res: object) => void,
    always = () => {}
  ) {
    return this.axios
      .get(path, { params: params })
      .then((result: object) => {
        console.log(`GET ${this.axios.baseURL}/${path}`);
        console.log(`result: ${result}`);
        successed(result);
      })
      .catch((error: object) => {
        console.log(`ERROR! GET ${this.axios.baseURL}/${path}`);
        console.log(`error: ${error}`);
        errored(error);
      })
      .then(always());
  }

  post(
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

  delete(
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
