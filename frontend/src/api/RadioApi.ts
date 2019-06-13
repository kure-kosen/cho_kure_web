import RestClient from "@/api/RestClient";

export interface IRadio {
  id: number;
  title: string;
  description: string;
  mp3: {
    url?: string;
  };
  digest_mp3: {
    url?: string;
  };
  youtube_url: string;
  podcast_url: string;
  image: string;
  duration: number;
  play_time: string;
  published_at: string;
  created_at: string;
  updated_at: string;
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
