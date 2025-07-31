import { albumHandler, artistHandler } from "./search-handlers";
import { searchSpotify } from "./search-service";

export const searchArtists = (query: string) => {
  return searchSpotify(query, "0", artistHandler);
};

export const searchAlbums = (query: string, offset: string) =>
  searchSpotify(query, offset, albumHandler);

export const searchFunctionsMap = {
  artists: searchArtists,
  albums: searchAlbums,
};
