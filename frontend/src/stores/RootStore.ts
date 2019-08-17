import ContactStore from "@/stores/ContactStore";
import ContactApi from "@/api/ContactApi";
import RadioStore from "@/stores/RadioStore";
import RadioApi from "@/api/RadioApi";
import RestClient from "@/api/RestClient";

export default class RootStore {
  public contactStore: ContactStore;
  public radioStore: RadioStore;

  constructor(baseUrl: string) {
    const restClient = new RestClient(baseUrl);

    const contactApi = new ContactApi(restClient);
    this.contactStore = new ContactStore(contactApi);

    const radioApi = new RadioApi(restClient);
    this.radioStore = new RadioStore(radioApi);
  }
}
