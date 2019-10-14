import { action, observable } from "mobx";

import PersonalityApi, { IPersonality } from "@/api/PersonalityApi";

export default class PersonalityStore {
  @observable public personalities?: IPersonality[];
  @observable public regularPersonalities?: IPersonality[];

  public transportLayer: PersonalityApi;

  constructor(transportLayer: PersonalityApi) {
    this.transportLayer = transportLayer;
  }

  public get shuffledRegularPersonality() {
    if (!this.regularPersonalities) return;

    const shuffledPersonality = [...this.regularPersonalities];
    for (let i = 0, len = shuffledPersonality.length; i < len; i++) {
      const rand = Math.floor(Math.random() * i);

      [shuffledPersonality[i], shuffledPersonality[rand]] = [
        shuffledPersonality[rand],
        shuffledPersonality[i]
      ];
    }

    return shuffledPersonality;
  }

  public async fetchPersonalities() {
    if (this.personalities && this.personalities.length > 0) return;
    const res = await this.transportLayer.fetchPersonality();
    this.setPersonalities(res.data);
  }

  public async fetchRegularPersonality() {
    if (this.regularPersonalities && this.regularPersonalities.length > 0) {
      return;
    }
    const res = await this.transportLayer.fetchRegularPersonality();
    this.setRegularPersonalities(res.data);
  }

  @action public setRegularPersonalities(personalities: IPersonality[]) {
    this.regularPersonalities = personalities;
  }

  @action public setPersonalities(personalities: IPersonality[]) {
    this.personalities = personalities;
  }
}
