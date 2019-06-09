import { action, observable } from "mobx";

import RadioApi, { IRadioResponse } from "@/api/RadioApi";

export default class RadioStore {
  @observable public radios?: IRadioResponse[];

  public transportLayer: RadioApi;

  constructor(transportLayer: RadioApi) {
    this.transportLayer = transportLayer;
  }

  public async fetchRadios() {
    const enums = await this.transportLayer.fetchRadios();
    this.setRadios(enums.data);
  }

  @action public setRadios(radios: any) {
    this.radios = radios;
  }
}
