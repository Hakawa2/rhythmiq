import { findDetailsFunctionsMap } from "@/services/details";
import type { DetailsMap } from "@/types/details-type";
import type { SearchType } from "@/types/search-types";
import { useQuery } from "@tanstack/react-query";

export const useFindDetails = <T extends SearchType>(type: T, id: string) => {
  const queryFn = async () =>
    findDetailsFunctionsMap[type](id) as Promise<DetailsMap[T]>;

  return useQuery({
    queryKey: [type, id],
    queryFn,
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
};
