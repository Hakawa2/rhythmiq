import { albumHandler, artistHandler } from "./search-handlers";
import { searchList } from "./search-service";

export const searchArtists = (query: string) => {
  return searchList(query, "0", artistHandler);
};

export const searchAlbums = (query: string, offset: string) =>
  searchList(query, offset, albumHandler);

export const searchFunctionsMap = {
  artists: searchArtists,
  albums: searchAlbums,
};
