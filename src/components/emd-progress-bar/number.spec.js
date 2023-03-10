import { toFixed, toInteger, toFloat } from "./number.utils";

describe("utils/number", () => {
  it("toInteger works", async () => {
    expect(toInteger(1)).toBe(1);
    expect(toInteger("1")).toBe(1);
    expect(toInteger(1e5)).toBe(100000);
    expect(toInteger("1e5")).toBe(1);
    expect(toInteger("256 foobar")).toBe(256);
    expect(toInteger("foo 256bar")).toBe(NaN);
    expect(toInteger({})).toBe(NaN);
    expect(toInteger([])).toBe(NaN);
    expect(toInteger(new Date())).toBe(NaN);
    expect(toInteger(null)).toBe(NaN);
    expect(toInteger(undefined)).toBe(NaN);
    expect(toInteger(null, 0)).toBe(0);
    expect(toInteger(undefined, -1)).toBe(-1);
  });

  it("toFloat works", async () => {
    expect(toFloat(1)).toBe(1);
    expect(toFloat("1")).toBe(1);
    expect(toFloat(1.23)).toBe(1.23);
    expect(toFloat("1.23")).toBe(1.23);
    expect(toFloat(1e5)).toBe(100000);
    // `parseFloat()` works differently than `parseInt()` in this case
    expect(toFloat("1e5")).toBe(100000);
    expect(toFloat("256 foobar")).toBe(256);
    expect(toFloat("256.78 foobar")).toBe(256.78);
    expect(toFloat("foo 256bar")).toBe(NaN);
    expect(toFloat({})).toBe(NaN);
    expect(toFloat([])).toBe(NaN);
    expect(toFloat(new Date())).toBe(NaN);
    expect(toFloat(null)).toBe(NaN);
    expect(toFloat(undefined)).toBe(NaN);
    expect(toFloat(null, 0)).toBe(0);
    expect(toFloat(undefined, -1)).toBe(-1);
  });

  it("toFixed works", async () => {
    expect(toFixed(1)).toBe("1");
    expect(toFixed(1.23)).toBe("1");
    expect(toFixed(1.78)).toBe("2");
    expect(toFixed("1")).toBe("1");
    expect(toFixed("1.23")).toBe("1");
    expect(toFixed("1.78")).toBe("2");
    expect(toFixed(1, 2)).toBe("1.00");
    expect(toFixed("1", 2)).toBe("1.00");
    expect(toFixed("1 foo", 2)).toBe("1.00");
    expect(toFixed("foo 1 bar", 2)).toBe("NaN");
    expect(toFixed("1.23", 4)).toBe("1.2300");
    expect(toFixed("1.78", 2)).toBe("1.78");
    expect(toFixed({})).toBe("NaN");
    expect(toFixed([])).toBe("NaN");
    expect(toFixed(new Date())).toBe("NaN");
    expect(toFixed(null)).toBe("NaN");
    expect(toFixed(undefined)).toBe("NaN");
    expect(toFixed({}, 3)).toBe("NaN");
    expect(toFixed([], 2)).toBe("NaN");
    expect(toFixed(new Date(), 1)).toBe("NaN");
    expect(toFixed(null, 4)).toBe("NaN");
    expect(toFixed(undefined, 3)).toBe("NaN");
    expect(toFixed(1, "2")).toBe("1.00");
    expect(toFixed("1", "2")).toBe("1.00");
    expect(toFixed("1 foo", "2")).toBe("1.00");
    expect(toFixed("foo 1 bar", "2")).toBe("NaN");
    expect(toFixed(1, "foo")).toBe("1");
    expect(toFixed("1", undefined)).toBe("1");
    expect(toFixed("1 foo", null)).toBe("1");
    expect(toFixed("foo 1 bar", {})).toBe("NaN");
  });
});
