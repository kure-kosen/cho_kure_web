import MockAdapter from "axios-mock-adapter";
import { AxiosInstance } from "axios";
import RestClient from "@/api/RestClient";
import {
  rawSnakeCase,
  expectCamelCase
} from "@/utils/convert-object-keys-to-camelcase.test";

const baseUrl = "https://test.kure-rad.io/";
const csrfToken = "this-is-csrf-token";

describe("rest client", () => {
  let mockAxios: MockAdapter;
  let restClient: RestClient;

  beforeAll(() => {
    document.head.innerHTML = `<meta name="csrf-token" content=${csrfToken}>`;
    restClient = new RestClient(baseUrl);
    mockAxios = new MockAdapter(restClient.axios);
  });

  describe("constructor", () => {
    it("get right csrf-token by document meta[name=csrf-token]", () => {
      const getCsrfToken = (document.querySelector(
        "meta[name=csrf-token]"
      ) as HTMLMetaElement).content;
      expect(getCsrfToken).toBe(csrfToken);
    });

    it("should set csrf-token to axios instance", () => {
      const restClientCsrfToken: string = ((mockAxios as any)
        .axiosInstance as AxiosInstance).defaults.headers["X-CSRF-TOKEN"];
      expect(restClientCsrfToken).toBe(csrfToken);
    });

    it("should set baseUrl to axios instance", () => {
      const restClientBaseUrl = ((mockAxios as any)
        .axiosInstance as AxiosInstance).defaults.baseURL;
      expect(restClientBaseUrl).toBe(baseUrl);
    });
  });

  describe("methods", () => {
    it("onGet", async () => {
      const params = { id: 3 };
      const expectResponce = { data: "ok" };
      const expectHttpStatusCode = 200;
      mockAxios.onGet("/").reply(expectHttpStatusCode, expectResponce);
      const res = await restClient.get("/", params);
      expect(res.config.params).toStrictEqual(params);
      expect(res.data).toStrictEqual(expectResponce);
      expect(res.status).toBe(expectHttpStatusCode);
    });

    it("onPost", async () => {
      const params = { name: "cho_kure" };
      const expectHttpStatusCode = 200;
      mockAxios.onPost("/", params).reply(expectHttpStatusCode);
      const res = await restClient.post("/", params);
      expect(JSON.parse(res.config.data)).toStrictEqual(params);
      expect(res.status).toBe(expectHttpStatusCode);
    });

    it("onDelete", async () => {
      const params = { id: 3 };
      const expectHttpStatusCode = 200;
      mockAxios.onDelete("/", params).reply(expectHttpStatusCode);
      const res = await restClient.delete("/", params);
      expect(JSON.parse(res.config.data)).toStrictEqual({ params });
      expect(res.status).toBe(expectHttpStatusCode);
    });
  });

  it("mapKeysCamelCase with axios.interceptors.response", async () => {
    const expectHttpStatusCode = 200;
    mockAxios.onGet("/").reply(expectHttpStatusCode, rawSnakeCase);
    const res = await restClient.get("/");
    expect(res.data).toStrictEqual(expectCamelCase);
    expect(res.status).toBe(expectHttpStatusCode);
  });
});
