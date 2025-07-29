import { findDetailsFunctionsMap } from "@/services/details";
import type { Details } from "@/types/details-type";
import type { SearchType } from "@/types/search-types";
import { useQuery } from "@tanstack/react-query";

export const useFindDetails = (type: SearchType, id: string) => {
  const queryFn = async () =>
    findDetailsFunctionsMap[type](id) as Promise<Details>;

  return useQuery({
    queryKey: [type, id],
    queryFn,
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
};
