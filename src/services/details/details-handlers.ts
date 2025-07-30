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
import {
  formatDate,
  formatNumbers,
  formatToTime,
} from "@/utils/format-date.utils";

const defaultImage = "https://placehold.co/512x512";

export const artistDetailsHandler: DetailsConfig<RawArtistItem, ArtistDetails> =
  {
    type: "artists",
    handleItem: (artist: RawArtistItem) => ({
      id: artist.id,
      name: artist.name,
      image: artist.images[0]?.url ?? defaultImage,
      ariaLabel: `Artista ${artist.name}`,
      popularity: `Popularidade: ${artist.popularity}/100`,
      followers: `Seguidores: ${formatNumbers(artist.followers?.total)}`,
      genres: `Generos: ${artist.genres.toString()}`,
    }),
  };

export const topTracksDetailsHandler: DetailsConfig<RawTopTrack, Track> = {
  handleItem: (track) => ({
    id: track.id,
    title: track.name,
    subtitle: formatToTime(track.duration_ms),
  }),
};

export const albumDetailsHandler: DetailsConfig<RawAlbumItem, AlbumDetails> = {
  type: "albums",
  handleItem: (album: RawAlbumItem) => ({
    id: album.id,
    name: album.name,
    image: album.images[0]?.url ?? defaultImage,
    popularity: `Popularidade: ${album.popularity}/100`,
    description: `Data de lançamento: ${formatDate(album.release_date)}`,
    tracksQuantity: `Quantitade de musicas: ${album.total_tracks}`,
    tracks: album.tracks.items.map((track) =>
      topTracksDetailsHandler.handleItem(track)
    ),
  }),
};
