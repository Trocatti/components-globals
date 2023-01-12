import { getMax, getPrecision, getProgress } from "./math.utils";

describe("utils/math", () => {
  test("getPrecision works", () => {
    const value = getPrecision("1");
    const value1 = getPrecision(0.99);
    const value2 = getPrecision(1.9);
    const value3 = getPrecision();
    const value4 = getPrecision("abc");

    expect(value).toBe(1);
    expect(value1).toBe(0);
    expect(value2).toBe(1);
    expect(value3).toBe(0);
    expect(value4).toBe(0);
  });

  test("getMax works", () => {
    const value = getMax("0");
    const value1 = getMax(0.99);
    const value2 = getMax(101);
    const value3 = getMax();
    const value4 = getMax("abc");

    expect(value).toBe(100);
    expect(value1).toBe(0.99);
    expect(value2).toBe(101);
    expect(value3).toBe(100);
    expect(value4).toBe(100);
  });

  test("getProgress works", () => {
    const value = getProgress("1", 100);
    const value1 = getProgress(0.99, 0, 1);
    const value3 = getProgress();
    const value4 = getProgress("abc", 0);
    const value2 = getProgress(100, 30);
    const value5 = getProgress(20, 800, 1);

    expect(value).toBe("1");
    expect(value1).toBe("1.0");
    expect(value2).toBe("333");
    expect(value3).toBe("0");
    expect(value4).toBe("0");
    expect(value5).toBe("2.5");
  });
});
