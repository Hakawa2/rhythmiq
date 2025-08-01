import type { SearchState } from "@/context/search/search-types";
import { vi } from "vitest";

export const initialSearchStateMock: SearchState = {
  term: "",
  toggle: "artists",
  offset: "0",
};

export const mockSearchContextValue = {
  state: initialSearchStateMock,
  dispatch: vi.fn(),
};
