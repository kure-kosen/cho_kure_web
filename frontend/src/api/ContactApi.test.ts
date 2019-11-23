import MockAdapter from "axios-mock-adapter";
import RestClient from "@/api/RestClient";
import ContactApi from "@/api/ContactApi";
import { expectResponces } from "./expectResponces";

const baseUrl = "http://localhost:3000";
const csrfToken = "this-is-csrf-token";

describe("ContactApi", () => {
  let mockAxios: MockAdapter;
  let restClient: RestClient;
  let contactApi: ContactApi;

  beforeAll(() => {
    document.head.innerHTML = `<meta name="csrf-token" content=${csrfToken}>`;
    restClient = new RestClient(baseUrl);
    mockAxios = new MockAdapter(restClient.axios);
    contactApi = new ContactApi(restClient);
  });

  it("fetchContactEnum in Mock", async () => {
    const expectHttpStatusCode = 200;
    mockAxios
      .onGet("/api/v1/contacts/enum")
      .reply(expectHttpStatusCode, expectResponces.api.v1.contacts.enum);
    const res = await contactApi.fetchContactEnum();
    expect(res.data).toStrictEqual(expectResponces.api.v1.contacts.enum);
    expect(res.status).toBe(expectHttpStatusCode);
  });

  // it("fetchContactEnum from back-end(localhost)", async () => {
  //   const expectResponce = {
  //     corners: {
  //       普通のお便り: 0,
  //       "ラジオへの感想・意見": 10,
  //       ラジオ出演: 20,
  //       バグ報告: 30
  //     },
  //     departments: {
  //       機械工学科: 10,
  //       電気情報工学科: 20,
  //       環境都市工学科: 30,
  //       建築学科: 40,
  //       専攻科: 50,
  //       卒業生: 60,
  //       保護者: 70,
  //       教員: 80,
  //       その他: 90
  //     },
  //     grades: {
  //       "1年": 10,
  //       "2年": 20,
  //       "3年": 30,
  //       "4年": 40,
  //       "5年": 50,
  //       obog: 60,
  //       その他: 70
  //     }
  //   };
  //   const expectHttpStatusCode = 200;
  //   const res = await contactApi.fetchContactEnum();
  //   expect(res.data).toStrictEqual(expectResponce);
  //   expect(res.status).toBe(expectHttpStatusCode);
  // });
});
