import { action, observable } from "mobx";

import PersonalityApi, { IPersonality } from "@/api/PersonalityApi";

export default class PersonalityStore {
  @observable public personalities?: IPersonality[];

  public transportLayer: PersonalityApi;

  constructor(transportLayer: PersonalityApi) {
    this.transportLayer = transportLayer;
  }

  public async fetchPersonalities() {
    if (this.personalities && this.personalities.length > 0) return;
    const res = await this.transportLayer.fetchPersonality();
    this.setPersonalities(res.data);
  }

  @action public setPersonalities(personalities: IPersonality[]) {
    this.personalities = personalities;
  }
}
