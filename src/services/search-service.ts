import apiSpotify from "@/lib/apiSpotify";
import type { List } from "@/types/list-type";
import type { SearchConfig } from "@/types/search-types";

export const searchSpotify = async (
  query: string,
  offset: string = "0",
  config: SearchConfig
): Promise<List> => {
  const res = await apiSpotify.get(`/search`, {
    params: {
      q: query,
      type: config.type,
      offset,
    },
  });

  const items = config.getItems(res.data).map(config.mapItem);

  return {
    items,
    pagination: config.getPagination?.(res.data),
  };
};
