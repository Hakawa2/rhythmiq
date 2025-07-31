import { defaultImage } from "@/constants";
import type { RawAlbumItem, RawArtistItem } from "@/types/common-response-type";
import type { Albums, Artists } from "@/types/list-type";
import type { SearchConfig } from "@/types/search-types";
import { formatDate, formatNumbers } from "@/utils/format.utils";
import { getPagination } from "@/utils/pagination.utils";

export const artistHandler: SearchConfig<Artists, RawArtistItem> = {
  type: "artist",
  getItems: (data) => data.artists?.items || [],
  mapItem: (artist: RawArtistItem) => ({
    id: artist.id,
    name: artist.name,
    image: artist.images[0]?.url ?? defaultImage,
    description: {
      key: "followers",
      option: {
        term: formatNumbers(artist.followers?.total),
      },
    },
    uri: `artists/${artist.id}`,
  }),
};

export const albumHandler: SearchConfig<Albums, RawAlbumItem> = {
  type: "album",
  getItems: (data) => data.albums?.items || [],
  mapItem: (album: RawAlbumItem) => ({
    id: album.id,
    name: album.name,
    image: album.images[0]?.url ?? defaultImage,
    description: {
      key: "releaseDate",
      option: {
        term: formatDate(album.release_date),
      },
    },
    uri: `albums/${album.id}`,
  }),
  getPagination: (data) => ({
    previous: getPagination(data.albums.previous),
    next: getPagination(data.albums.next),
    total: data.albums.total,
  }),
};
