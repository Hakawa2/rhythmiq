// handlers.ts
import type {
  Albums,
  Artists,
  RawAlbumItem,
  RawArtistItem,
} from "@/types/list-type";
import type { SearchConfig } from "@/types/search-types";
import { formatDate } from "@/utils/format-date.utils";
import { getPagination } from "@/utils/pagination.utils";

const defaultImage = "https://placehold.co/512x512";

export const artistHandler: SearchConfig<Artists, RawArtistItem> = {
  type: "artist",
  getItems: (data) => data.artists?.items || [],
  mapItem: (artist: RawArtistItem) => ({
    id: artist.id,
    name: artist.name,
    image: artist.images[0]?.url ?? defaultImage,
    ariaLabel: `Artista ${artist.name}`,
    description: `Seguidores ${artist.followers?.total}`,
    uri: `artist/${artist.id}`,
  }),
};

export const albumHandler: SearchConfig<Albums, RawAlbumItem> = {
  type: "album",
  getItems: (data) => data.albums?.items || [],
  mapItem: (album: RawAlbumItem) => ({
    id: album.id,
    name: album.name,
    image: album.images[0]?.url ?? defaultImage,
    ariaLabel: `Álbum ${album.name}`,
    description: `Data de lançamento: ${formatDate(album.release_date)}`,
    uri: `album/${album.id}`,
  }),
  getPagination: (data) => ({
    previous: getPagination(data.albums.previous),
    next: getPagination(data.albums.next),
    total: data.albums.total,
  }),
};
