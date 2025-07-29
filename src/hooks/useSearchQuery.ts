import { searchFunctionsMap } from "@/services";
import type { List } from "@/types/list-type";
import type { SearchType } from "@/types/search-types";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";

type UseSearchQueryOptions = {
  enabled?: boolean;
};

export const useSearchQuery = (
  query: string,
  offset: string = "0",
  type: SearchType,
  options?: UseSearchQueryOptions
): UseQueryResult<List, Error> & { isEmpty: boolean } => {
  const queryFn = () =>
    searchFunctionsMap[type](query, offset) as Promise<List>;

  const queryResult = useQuery({
    queryKey: [type, query, offset],
    queryFn,
    enabled: options?.enabled ?? true,
    staleTime: 1000 * 60 * 5,
    retry: false,
  });

  const isEmpty =
    queryResult.isSuccess &&
    Array.isArray(queryResult.data) &&
    queryResult.data.length === 0;

  return {
    ...queryResult,
    isEmpty,
  };
};
