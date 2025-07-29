import type { SearchType } from "@/types/search-types";
import { useReducer } from "react";
import useDebounce from "./useDebounce";

type SearchState = {
  query: string;
  type: SearchType;
};

type SearchAction =
  | { type: "SET_QUERY"; payload: string }
  | { type: "TOGGLE_TYPE" };

const reducer = (state: SearchState, action: SearchAction): SearchState => {
  switch (action.type) {
    case "SET_QUERY":
      return { ...state, query: action.payload };
    case "TOGGLE_TYPE":
      return {
        ...state,
        type: state.type === "artists" ? "albums" : "artists",
      };
    default:
      return state;
  }
};

export const useSearchController = (queryLimit = 2) => {
  const [state, dispatch] = useReducer(reducer, {
    query: "",
    type: "artists",
  });

  const debouncedSearch = useDebounce(state.query, 500);

  return {
    search: state.query,
    setSearch: (value: string) =>
      dispatch({ type: "SET_QUERY", payload: value }),
    type: state.type,
    toggleType: () => dispatch({ type: "TOGGLE_TYPE" }),
    debouncedSearch,
    isQueryEnabled: debouncedSearch.length > queryLimit,
  };
};
