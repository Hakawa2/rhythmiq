import { findTopTrackDetails } from "@/services/details/details-service";
import { useQuery } from "@tanstack/react-query";

export const useFindTopTracks = (id: string) => {
  return useQuery({
    queryKey: [id],
    queryFn: () => findTopTrackDetails(id),
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
};
