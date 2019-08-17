import { IRadio } from "@/api/RadioApi";

export interface IPersonality {
  id: number;
  name: string;
  nickname: string;
  description: string;
  image: string;
  tag_list: string[];
  radios: Exclude<IRadio, "personalities">;
}
