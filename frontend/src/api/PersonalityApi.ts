import RestClient from "@/api/RestClient";
import { IRadio } from "@/api/RadioApi";

export interface IPersonality {
  id: number;
  name: string;
  nickname?: string | null;
  description: string;
  image: string;
  tag_list: string[];
  radios?: Exclude<IRadio, "personalities">;
  facebook_id?: string | null;
  instagram_id?: string | null;
  twitter_id?: string | null;
}

export default class PersonalityApi {
  public restClient: RestClient;

  constructor(restClient: RestClient) {
    this.restClient = restClient;
  }

  public fetchPersonality() {
    return this.restClient.get<IPersonality[]>("/api/v1/personalities");
  }

  public fetchRegularPersonality() {
    return this.restClient.get<IPersonality[]>("/api/v1/personalities/regular");
  }
}
