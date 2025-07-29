import apiSpotify from "@/lib/apiSpotify";
import type { ListItem, RawListItem } from "@/types/list-type";
import { formatDate } from "@/utils/format-date.utils";

export const searchArtists = async (query: string): Promise<ListItem[]> => {
  const res = await apiSpotify.get(`/search`, {
    params: {
      q: query,
      type: "artist",
    },
  });

  return (res.data.artists.items || []).map((artist: RawListItem) => ({
    id: artist.id,
    name: artist.name,
    image: artist.images[0]?.url ?? "https://placehold.co/512x512",
    ariaLabel: `Artista ${artist.name}`,
    description: `Seguidores ${artist.followers?.total}`,
    uri: `artist/${artist.id}`,
  }));
};

export const searchAlbums = async (query: string): Promise<ListItem[]> => {
  const res = await apiSpotify.get(`/search`, {
    params: {
      q: query,
      type: "album",
    },
  });

  return (res.data.albums.items || []).map((album: RawListItem) => ({
    id: album.id,
    name: album.name,
    image: album.images[0]?.url ?? "https://placehold.co/512x512",
    ariaLabel: `Album ${album.name}`,
    description: `Data de lançamento: ${formatDate(album.release_date)}`,
    uri: `album/${album.id}`,
  }));
};

export const searchFunctionsMap = {
  artists: searchArtists,
  albums: searchAlbums,
};
