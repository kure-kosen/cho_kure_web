import { computed } from "mobx";
import ContactStore from "../stores/ContactStore";

export default class ContactModel {
  public store: ContactStore;

  public id: number;
  public readable: boolean;
  public corner: number;
  public message: string;
  public nickname?: string;
  public name?: string;
  public email: string;
  public department: number;
  public grade: number;

  constructor(store: ContactStore, json: any) {
    this.store = store;

    const { id, readable, corner, message, nickname, name, email, department, grade } = json;
    this.id = id;
    this.readable = readable;
    this.corner = corner;
    this.message = message;
    this.nickname = nickname;
    this.name = name;
    this.email = email;
    this.department = department;
    this.grade = grade;
  }

  public save(successed: (res: object) => void, failed: (res: object) => void) {
    console.log(this.toJson);
    return this.store.transportLayer.saveContact(this.toJson, successed, failed);
  }

  @computed
  get toJson() {
    const { id, readable, corner, message, nickname, name, email, department, grade } = this;
    return {
      id,
      readable,
      corner,
      message,
      nickname,
      name,
      email,
      department,
      grade
    };
  }
}
