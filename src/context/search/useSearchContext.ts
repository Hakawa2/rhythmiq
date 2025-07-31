import { useContext } from "react";
import { SearchContext } from "./search-context";

export const useSearchContext = () => useContext(SearchContext);
