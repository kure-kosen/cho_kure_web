import { action, observable } from "mobx";

import ContactApi, { IContactEnum } from "@/api/ContactApi";
import ContactModel from "@/models/ContactModel";

export default class ContactStore {
  @observable public contactEnum?: IContactEnum;

  public transportLayer: ContactApi;

  constructor(transportLayer: ContactApi) {
    this.transportLayer = transportLayer;
  }

  public createContact(json: object) {
    return new ContactModel(this, json);
  }

  public async fetchContactEnum() {
    const enums = await this.transportLayer.fetchContactEnum();
    this.setContactEnum(enums.data);
  }

  @action public setContactEnum(enums: any) {
    this.contactEnum = enums;
  }
}
