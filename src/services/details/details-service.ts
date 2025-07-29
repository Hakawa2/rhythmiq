import apiSpotify from "@/lib/apiSpotify";
import type { DetailsConfig } from "@/types/details-type";

export const findDetails = async <T, K>(
  type: string,
  id: string,
  config: DetailsConfig<T, K>
): Promise<List> => {
  const res = await apiSpotify.get(`${type}/${id}`);

  return {
    ...config.handleItem(res.data),
  };
};

export const findTopTrackDetails = async (id: string) => {
  const res = await apiSpotify.get(`artists/${id}/top-tracks`);

  return {
    topTracks: res.data.tracks,
  };
};
