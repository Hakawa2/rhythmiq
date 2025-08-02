import { findDetailsFunctionsMap } from "@/services/details";
import type { DetailsMap } from "@/types/details-type";
import type { SearchType } from "@/types/search-types";
import { useQuery } from "@tanstack/react-query";

export const createQueryFn = <T extends SearchType>(type: T, id?: string) => {
  return async () => {
    if (!id) {
      throw new Error("Missing ID");
    }
    return findDetailsFunctionsMap[type](id) as Promise<DetailsMap[T]>;
  };
};

export const useFindDetails = <T extends SearchType>(type: T, id?: string) => {
  return useQuery({
    queryKey: [type, id],
    queryFn: createQueryFn(type, id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
};
