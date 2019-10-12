import { parsePlayTime, calcProgress } from "./RadioCardPlayButton";

describe("RadioCardPlayButton", () => {
  describe("所要時間の整形 parsePlayTime()", () => {
    it("0s -> 00:00", () => {
      expect(parsePlayTime(0)).toBe("00:00");
    });
    it("10s -> 0:10", () => {
      expect(parsePlayTime(10)).toBe("0:10");
    });
    it("59s -> 0:59", () => {
      expect(parsePlayTime(59)).toBe("0:59");
    });
    it("60s(1m) -> 1:00", () => {
      expect(parsePlayTime(60)).toBe("1:00");
    });
    it("300s(5m) -> 5:00", () => {
      expect(parsePlayTime(300)).toBe("5:00");
    });
    it("3599s(59m59s) -> 59:59", () => {
      expect(parsePlayTime(3599)).toBe("59:59");
    });
    it("3600s(1h) -> 1:00:00", () => {
      expect(parsePlayTime(3600)).toBe("01:00:00");
    });
  });
});

describe("RadioCardPlayButton", () => {
  describe("何%再生したか calcProgress()", () => {
    it("現在時間0s, 所要時間30s -> 0%", () => {
      expect(calcProgress({ currentTime: 0, duration: 30 })).toBe(0);
    });
    it("現在時間3s, 所要時間30s -> 10%", () => {
      expect(calcProgress({ currentTime: 3, duration: 30 })).toBe(10);
    });
    it("現在時間10s, 所要時間30s -> 33.3%", () => {
      expect(calcProgress({ currentTime: 10, duration: 30 })).toBe(33.3);
    });
    it("現在時間30s, 所要時間30s -> 1000%", () => {
      expect(calcProgress({ currentTime: 30, duration: 30 })).toBe(100);
    });
  });
});
