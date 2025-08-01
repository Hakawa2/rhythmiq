import { describe, expect, it } from "vitest";
import { formatDate, formatNumbers, formatToTime } from "./format.utils";

describe("formatDate", () => {
  it("should return empty string if date is undefined", () => {
    expect(formatDate()).toBe("");
  });

  it("should format a valid Date object to pt-BR format", () => {
    const date = new Date("2020-01-01");
    const expected = new Intl.DateTimeFormat("pt-BR").format(date);
    expect(formatDate("2020-01-01")).toBe(expected);
  });
});

describe("formatNumbers", () => {
  it("should return empty string for 0", () => {
    expect(formatNumbers(0)).toBe("");
  });

  it("should format positive numbers in pt-BR", () => {
    expect(formatNumbers(1234567)).toBe("1.234.567");
  });
});

describe("formatToTime", () => {
  it("should return empty string for 0", () => {
    expect(formatToTime(0)).toBe("");
  });

  it("should handle durations less than one minute", () => {
    expect(formatToTime(45000)).toBe("0:45");
  });
});
