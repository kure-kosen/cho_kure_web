import ContactApi from "@/api/ContactApi";
import PersonalityApi from "@/api/PersonalityApi";
import RadioApi from "@/api/RadioApi";
import RestClient from "@/api/RestClient";
import ContactStore from "@/stores/ContactStore";
import PersonalityStore from "@/stores/PersonalityStore";
import RadioStore from "@/stores/RadioStore";

export default class RootStore {
  public contactStore: ContactStore;
  public radioStore: RadioStore;
  public personalityStore: PersonalityStore;

  constructor(baseUrl: string) {
    const restClient = new RestClient(baseUrl);

    const contactApi = new ContactApi(restClient);
    this.contactStore = new ContactStore(contactApi);

    const radioApi = new RadioApi(restClient);
    this.radioStore = new RadioStore(radioApi);

    const personalityApi = new PersonalityApi(restClient);
    this.personalityStore = new PersonalityStore(personalityApi);
  }
}
