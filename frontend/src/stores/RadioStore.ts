import { action, observable } from "mobx";

import RadioApi, { IRadio } from "@/api/RadioApi";

export default class RadioStore {
  @observable public radios?: IRadio[];

  public transportLayer: RadioApi;

  constructor(transportLayer: RadioApi) {
    this.transportLayer = transportLayer;
  }

  public async fetchRadios() {
    if (this.radios && this.radios.length > 0) return;
    const res = await this.transportLayer.fetchRadios();
    this.setRadios(res.data);
  }

  @action public setRadios(radios: IRadio[]) {
    this.radios = radios;
  }
}
