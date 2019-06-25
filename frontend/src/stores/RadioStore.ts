import { action, observable } from "mobx";

import RadioApi, { IRadio } from "@/api/RadioApi";

export default class RadioStore {
  @observable public radios: IRadio[];

  public transportLayer: RadioApi;

  constructor(transportLayer: RadioApi) {
    this.transportLayer = transportLayer;
    this.radios = [];
  }

  public async fetchRadios() {
    if (this.radios && this.radios.length > 0) return;
    const enums = await this.transportLayer.fetchRadios();
    this.setRadios(enums.data);
  }

  @action public setRadios(radios: any) {
    this.radios = radios;
  }
}
