import { action, observable } from "mobx";

import RadioApi, { IRadio } from "@/api/RadioApi";

interface ShuffledRadios {
  limit?: number;
}

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

  public latestRadios(
    { offset, limit }: { offset?: number; limit?: number } = {
      offset: 0,
      limit: undefined
    }
  ): IRadio[] | undefined {
    return (
      this.radios &&
      this.radios
        .sort((radioA, radioB) => radioB.id - radioA.id)
        .slice(offset, limit)
    );
  }
}
