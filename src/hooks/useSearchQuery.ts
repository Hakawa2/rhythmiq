import { searchFunctionsMap } from "@/services/search-service";
import type { SearchType } from "@/types/search-types";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";

type UseSearchQueryOptions = {
  enabled?: boolean;
};

export const useSearchQuery = <T = unknown>(
  query: string,
  type: SearchType = "artists",
  options?: UseSearchQueryOptions
): UseQueryResult<T[], Error> & { isEmpty: boolean } => {
  const queryFn = () => searchFunctionsMap[type](query) as Promise<T[]>;

  const queryResult = useQuery({
    queryKey: [type, query],
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
