import { useReducer } from "react";
import { SearchContext } from "./search-context";
import { initialSearchState, searchReducer } from "./search-reducer";

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(searchReducer, initialSearchState);

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};
