import { searchFunctionsMap } from "@/services/search-service";
import type { ListItem } from "@/types/list-type";
import type { SearchType } from "@/types/search-types";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";

type UseSearchQueryOptions = {
  enabled?: boolean;
};

export const useSearchQuery = (
  query: string,
  type: SearchType = "artists",
  options?: UseSearchQueryOptions
): UseQueryResult<ListItem[], Error> & { isEmpty: boolean } => {
  const queryFn = () => searchFunctionsMap[type](query) as Promise<ListItem[]>;

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
