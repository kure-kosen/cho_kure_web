import { action, observable } from "mobx";

import RadioApi, { IRadio } from "@/api/RadioApi";

export default class RadioStore {
  @observable public radios?: IRadio[];
  @observable public radio?: IRadio;

  public transportLayer: RadioApi;

  constructor(transportLayer: RadioApi) {
    this.transportLayer = transportLayer;
  }

  public async fetchRadios() {
    if (this.radios && this.radios.length > 0) return;
    const res = await this.transportLayer.fetchRadios();
    this.setRadios(res.data);
  }

  public async fetchRadio(radioId: number) {
    if (this.radios && this.radios.length > 0) {
      const findResult = this.radios.find(radio => radio.id === radioId);
      if (findResult) return findResult;
    }
    const res = await this.transportLayer.fetchRadio(radioId);
    return res.data;
  }

  @action public setRadios(radios: IRadio[]) {
    this.radios = radios;
  }
}
