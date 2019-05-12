import ContactApi from "../api/ContactApi";
import ContactModel from "../models/ContactModel";

export default class ContactStore {
  public transportLayer: ContactApi;

  constructor(transportLayer: ContactApi) {
    this.transportLayer = transportLayer;
  }

  public createContact(json: object) {
    return new ContactModel(this, json);
  }
}
