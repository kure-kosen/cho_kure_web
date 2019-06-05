import RestClient from "./RestClient";

export interface IContactEnum {
  corners: { [key: string]: number };
  departments: { [key: string]: number };
  grades: { [key: string]: number };
}

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
    return this.restClient.post(
      "/api/v1/contacts",
      json,
      succussed,
      errored,
      always
    );
  }

  public fetchContactEnum() {
    return this.restClient.get<IContactEnum>("/api/v1/contacts/enum");
  }
}
