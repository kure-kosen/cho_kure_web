import ContactStore from "@/stores/ContactStore";
import ContactApi from "@/api/ContactApi";
import RestClient from "@/api/RestClient";

export default class RootStore {
  public contactStore: ContactStore;

  constructor(baseUrl: string) {
    const restClient = new RestClient(baseUrl);

    const contactApi = new ContactApi(restClient);
    this.contactStore = new ContactStore(contactApi);
  }
}
