import ContactApi from "../api/ContactApi";
import ContactModel from "../models/ContactModel";

export default class ContactStore {
  transportLayer: ContactApi;

  constructor(transportLayer: ContactApi) {
    this.transportLayer = transportLayer;
  }

  createContact(json: object) {
    return new ContactModel(this, json);
  }
}
