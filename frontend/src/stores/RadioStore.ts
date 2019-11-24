import { action, observable } from "mobx";

import RadioApi, { IRadio } from "@/api/RadioApi";

interface ShuffledRadios {
  limit?: number;
}

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

  public shuffledRadios({ limit }: ShuffledRadios): IRadio[] | undefined {
    if (!this.radios) return;

    const shuffledRadio = [...this.radios];
    for (let i = 0, len = shuffledRadio.length; i < len; i++) {
      const rand = Math.floor(Math.random() * i);

      [shuffledRadio[i], shuffledRadio[rand]] = [
        shuffledRadio[rand],
        shuffledRadio[i]
      ];
    }

    return shuffledRadio.slice(0, limit);
  }

  @action public setRadios(radios: IRadio[]) {
    this.radios = radios;
  }
}
