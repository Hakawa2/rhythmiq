import { createContext } from "react";
import { initialSearchState } from "./search-reducer";
import type { SearchAction, SearchState } from "./search-types";

type SearchContextType = {
  state: SearchState;
  dispatch: React.Dispatch<SearchAction>;
};

export const SearchContext = createContext<SearchContextType>({
  state: initialSearchState,
  dispatch: () => {},
});
