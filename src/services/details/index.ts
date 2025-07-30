import {
  albumDetailsHandler,
  artistDetailsHandler,
  topTracksDetailsHandler,
} from "./details-handlers";
import { findDetails, findTopTrackDetails } from "./details-service";

export const findArtistDetails = async (query: string) => {
  const [artist, topTracks] = await Promise.all([
    findDetails("artists", query, artistDetailsHandler),
    findTopTrackDetails(query, topTracksDetailsHandler),
  ]);

  return {
    ...artist,
    ...topTracks,
  };
};

export const findAlbumDetails = (query: string) => {
  return findDetails("albums", query, albumDetailsHandler);
};

export const findDetailsFunctionsMap = {
  artists: findArtistDetails,
  albums: findAlbumDetails,
};
