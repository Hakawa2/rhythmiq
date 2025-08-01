import { describe, expect, it } from "vitest";
import { initialSearchState, searchReducer } from "./search-reducer";
import type { SearchAction, SearchState } from "./search-types";

describe("searchReducer", () => {
  it("should handle SET_TERM", () => {
    const action: SearchAction = { type: "SET_TERM", payload: "test" };
    const state = searchReducer(initialSearchState, action);
    expect(state).toEqual({ ...initialSearchState, term: "test" });
  });

  it("should handle SET_TOGGLE from artists to albums", () => {
    const state: SearchState = { term: "foo", toggle: "artists", offset: "5" };
    const action: SearchAction = { type: "SET_TOGGLE" };
    const result = searchReducer(state, action);
    expect(result).toEqual({ term: "", offset: "0", toggle: "albums" });
  });

  it("should handle SET_TOGGLE from albums to artists", () => {
    const state: SearchState = { term: "bar", toggle: "albums", offset: "2" };
    const action: SearchAction = { type: "SET_TOGGLE" };
    const result = searchReducer(state, action);
    expect(result).toEqual({ term: "", offset: "0", toggle: "artists" });
  });

  it("should handle CLEAN", () => {
    const state: SearchState = { term: "baz", toggle: "artists", offset: "3" };
    const action: SearchAction = { type: "CLEAN" };
    const result = searchReducer(state, action);
    expect(result).toEqual({ ...state, term: "", offset: "0" });
  });

  it("should handle SET_OFFSET", () => {
    const state: SearchState = { term: "abc", toggle: "albums", offset: "1" };
    const action: SearchAction = { type: "SET_OFFSET", payload: "10" };
    const result = searchReducer(state, action);
    expect(result).toEqual({ ...state, offset: "10" });
  });

  it("should handle UNKNOWN", () => {
    const state: SearchState = { term: "abc", toggle: "albums", offset: "1" };
    const action: SearchAction = {
      type: "UNKNOWN" as SearchAction["type"],
    } as SearchAction;
    const result = searchReducer(state, action);
    expect(result).toEqual({ ...state, offset: "1" });
  });
});
