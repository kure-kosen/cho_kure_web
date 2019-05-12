import RestClient from "./RestClient";

export default class ContactApi {
  public restClient: RestClient;

  constructor(restClient: RestClient) {
    this.restClient = restClient;
  }

  public saveContact(
    json: object,
    succussed: (res: object) => void,
    errored: (err: object) => void,
    always = () => {}
  ) {
    return this.restClient.post("/api/v1/contacts", json, succussed, errored, always);
  }
}
