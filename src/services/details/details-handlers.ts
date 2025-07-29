import type { RawAlbumItem, RawArtistItem } from "@/types/common-response-type";
import type { ArtistDetails, DetailsConfig } from "@/types/details-type";
import { formatDate, formatNumbers } from "@/utils/format-date.utils";

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
      uri: `artists/${artist.id}`,
      followers: `Seguidores: ${formatNumbers(artist.followers?.total)}`,
      genres: `Generos: ${artist.genres.toString()}`,
    }),
  };

export const albumDetailsHandler: DetailsConfig<> = {
  type: "albums",
  handleItem: (album: RawAlbumItem) => ({
    id: album.id,
    name: album.name,
    image: album.images[0]?.url ?? defaultImage,
    ariaLabel: `Álbum ${album.name}`,
    description: `Data de lançamento: ${formatDate(album.release_date)}`,
    uri: `album/${album.id}`,
  }),
};
