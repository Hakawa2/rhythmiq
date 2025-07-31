import type { SearchType } from "@/types/search-types";

export type SearchState = {
  term: string;
  offset: string;
  toggle: SearchType;
};

export type SearchAction =
  | { type: "SET_TERM"; payload: string }
  | { type: "SET_TOGGLE" }
  | { type: "SET_OFFSET"; payload: string }
  | { type: "CLEAN" };
