import type { SearchAction, SearchState } from "./search-types";

export const initialSearchState: SearchState = {
  term: "",
  toggle: "artists",
  offset: "0",
};

export const searchReducer = (
  state: SearchState,
  action: SearchAction
): SearchState => {
  switch (action.type) {
    case "SET_TERM":
      return { ...state, term: action.payload };
    case "SET_TOGGLE":
      return {
        term: "",
        offset: "0",
        toggle: state.toggle === "artists" ? "albums" : "artists",
      };
    case "CLEAN":
      return { ...state, term: "", offset: "0" };
    case "SET_OFFSET":
      return { ...state, offset: action.payload };
    default:
      return state;
  }
};
