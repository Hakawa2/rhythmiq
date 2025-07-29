import type { Artist, RawArtist } from "@/features/Artists/types";
import apiSpotify from "@/lib/apiSpotify";

export const searchArtists = async (query: string): Promise<Artist[]> => {
  const res = await apiSpotify.get(`/search`, {
    params: {
      q: query,
      type: "artist",
    },
  });

  return (res.data.artists.items || []).map((artist: RawArtist) => ({
    id: artist.id,
    name: artist.name,
    image: artist.images[0]?.url ?? "https://placehold.co/512x512",
    popularity: artist.popularity,
    uri: `artist/${artist.id}`,
  }));
};

export const searchAlbums = async (query: string): Promise<Artist[]> => {
  const res = await apiSpotify.get(`/search`, {
    params: {
      q: query,
      type: "album",
    },
  });

  return (res.data.artists.items || []).map((artist: RawArtist) => ({
    id: artist.id,
    name: artist.name,
    image: artist.images[0]?.url ?? "https://placehold.co/512x512",
    popularity: artist.popularity,
    uri: `artist/${artist.id}`,
  }));
};

export const searchFunctionsMap = {
  artists: searchArtists,
  albums: searchAlbums,
};
