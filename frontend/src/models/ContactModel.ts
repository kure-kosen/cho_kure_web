import { computed } from "mobx";
import ContactStore from "../stores/ContactStore";

export default class ContactModel {
  store: ContactStore;

  id: number;
  readable: boolean;
  corner: number;
  message: string;
  nickname?: string;
  name?: string;
  email: string;
  department: number;
  grade: number;

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

  save() {
    console.log(this.toJson);
    return this.store.transportLayer.saveContact(
      this.toJson,
      (res: object) => console.log(res),
      (err: object) => console.log(err)
    );
  }

  @computed
  get toJson() {
    return {
      id: this.id,
      readable: this.readable,
      corner: this.corner,
      message: this.message,
      nickname: this.nickname,
      name: this.name,
      email: this.email,
      department: this.department,
      grade: this.grade,
    };
  }
}
