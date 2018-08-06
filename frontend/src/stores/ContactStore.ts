import ContactApi from "../api/ContactApi";
import Contact from "../models/Contact";

export default class ContactStore {
  transportLayer: ContactApi;

  constructor(transportLayer: ContactApi) {
    this.transportLayer = transportLayer;
  }

  createContact(json: object) {
    return new Contact(this, json);
  }
}
