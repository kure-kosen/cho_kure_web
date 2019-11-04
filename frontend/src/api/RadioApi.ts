import RestClient from "@/api/RestClient";
import { IPersonality } from "@/api/PersonalityApi";

export interface IRadio {
  id: number;
  title: string;
  description: string;
  mp3: {
    url?: string;
  };
  digestMp3: {
    url?: string;
  };
  youtubeUrl: string;
  podcastUrl: string;
  image: string;
  duration: number;
  playTime: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  personalities: Exclude<IPersonality[], "radios">;
}

export default class RadioApi {
  public restClient: RestClient;

  constructor(restClient: RestClient) {
    this.restClient = restClient;
  }

  public fetchRadios() {
    return this.restClient.get<IRadio[]>("/api/v1/radios");
  }
}
