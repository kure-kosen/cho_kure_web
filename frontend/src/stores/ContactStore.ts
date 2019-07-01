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
    const res = await this.transportLayer.fetchContactEnum();
    this.setContactEnum(res.data);
  }

  @action public setContactEnum(enums: IContactEnum) {
    this.contactEnum = enums;
  }
}
