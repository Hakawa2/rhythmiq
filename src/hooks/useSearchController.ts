import { useSearchContext } from "@/context/search/useSearchContext";
import useDebounce from "./useDebounce";

export const useSearchController = (queryLimit = 2) => {
  const { state, dispatch } = useSearchContext();

  const debouncedSearch = useDebounce(state.term, 500);

  return {
    debouncedSearch,
    term: state.term,
    type: state.toggle,
    isQueryEnabled: debouncedSearch.length >= queryLimit,
    setSearch: (value: string) =>
      dispatch({ type: "SET_TERM", payload: value }),
    toggleType: () => dispatch({ type: "SET_TOGGLE" }),
    clean: () => dispatch({ type: "CLEAN" }),
  };
};
