import { searchFunctionsMap } from "@/services/search";
import type { List } from "@/types/list-type";
import type { SearchType } from "@/types/search-types";
import {
  useQuery,
  useQueryClient,
  type UseQueryResult,
} from "@tanstack/react-query";

type useFindListOptions = {
  enabled?: boolean;
};

export const useFindList = (
  query: string,
  offset: string = "0",
  type: SearchType,
  options?: useFindListOptions
): UseQueryResult<List, Error> & { isEmpty: boolean } => {
  const queryClient = useQueryClient();

  const queryFn = () =>
    searchFunctionsMap[type](query, offset) as Promise<List>;

  const queryResult = useQuery({
    queryKey: [type, query, offset],
    queryFn,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    enabled: options?.enabled,
    placeholderData: () => {
      return queryClient.getQueryData([type, query, offset]);
    },
    staleTime: 1000 * 60 * 5,
    retry: false,
  });

  const isEmpty =
    queryResult.isSuccess && queryResult.data?.items?.length === 0;

  return {
    ...queryResult,
    isEmpty,
  };
};
