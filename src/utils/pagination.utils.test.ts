import { describe, expect, it } from "vitest";
import { getPagination } from "./pagination.utils";

describe("getPagination", () => {
  it("should return empty string if pagination is null", () => {
    expect(getPagination(null)).toBe("");
  });

  it("should return empty string if pagination is empty", () => {
    expect(getPagination("")).toBe("");
  });

  it("should return the offset value if present in the query string", () => {
    expect(
      getPagination("https://example.com/api/items?offset=20&limit=10")
    ).toBe("20");
  });

  it("should return empty value if offset is not present in the query string", () => {
    expect(getPagination("https://example.com/api/items?&limit=10")).toBe("");
  });
});
