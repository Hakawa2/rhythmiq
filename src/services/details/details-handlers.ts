import { defaultImage } from "@/constants";
import i18n from "@/i18n";
import type {
  RawAlbumItem,
  RawArtistItem,
  RawTopTrack,
} from "@/types/common-response-type";
import type {
  AlbumDetails,
  ArtistDetails,
  DetailsConfig,
  Track,
} from "@/types/details-type";
import { formatDate, formatNumbers, formatToTime } from "@/utils/format.utils";

export const artistDetailsHandler: DetailsConfig<RawArtistItem, ArtistDetails> =
  {
    type: "artists",
    handleItem: (artist: RawArtistItem) => ({
      id: artist.id,
      name: artist.name,
      image: artist.images[0]?.url ?? defaultImage,
      subtitle: {
        key: "followers",
        option: {
          term: formatNumbers(artist.followers.total),
        },
      },
      optionalInformation: {
        key: "details.genres",
        option: {
          term: artist.genres.toString(),
        },
      },
      description: {
        key: "details.popularity",
        option: {
          term: `${artist.popularity}/100`,
        },
      },
    }),
  };

export const topTracksDetailsHandler: DetailsConfig<RawTopTrack, Track> = {
  handleItem: (track) => ({
    id: track.id,
    title: track.name,
    subtitle: i18n.t("details.duration", {
      term: formatToTime(track.duration_ms),
    }),
  }),
};

export const albumDetailsHandler: DetailsConfig<RawAlbumItem, AlbumDetails> = {
  type: "albums",
  handleItem: (album: RawAlbumItem) => ({
    id: album.id,
    name: album.name,
    image: album.images[0]?.url ?? defaultImage,
    subtitle: {
      key: "details.popularity",
      option: {
        term: `${album.popularity}/100`,
      },
    },
    description: {
      key: "releaseDate",
      option: {
        term: formatDate(album.release_date),
      },
    },
    optionalInformation: {
      key: "details.tracksQuantity",
      option: {
        term: album.total_tracks,
      },
    },
    tracks: album.tracks.items.map((track) =>
      topTracksDetailsHandler.handleItem(track)
    ),
  }),
};
