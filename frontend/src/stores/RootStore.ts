import ContactStore from "./ContactStore";
import ContactApi from "../api/ContactApi";
import RestClient from "../api/RestClient";

export default class RootStore {
  contactStore: ContactStore;

  constructor() {
    const restClient = new RestClient();

    const contactApi = new ContactApi(restClient);
    this.contactStore = new ContactStore(contactApi);
  }
}
