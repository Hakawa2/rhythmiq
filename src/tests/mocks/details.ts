import type { RawAlbumItem, RawArtistItem } from "@/types/common-response-type";
import type { ArtistDetails, DetailsMap } from "@/types/details-type";

export const artistDetailsMock: ArtistDetails = {
  id: "123",
  image: "image-url",
  name: "Artist Name",
  description: {
    key: "details.popularity",
    option: {
      term: "80/100",
    },
  },
  subtitle: {
    key: "followers",
    option: {
      term: "formattedNum(1000)",
    },
  },
  optionalInformation: {
    key: "details.genres",
    option: {
      term: "Pop,Rock",
    },
  },
};

export const albumDetailsMock: DetailsMap["albums"] = {
  id: "456",
  image: "album-image-url",
  name: "Album Name",
  tracks: [
    {
      id: "1",
      title: "Track 1",
      subtitle: "Duração: formattedTime(200000)",
    },
    {
      id: "2",
      subtitle: "Duração: formattedTime(250000)",
      title: "Track 2",
    },
  ],
  description: {
    key: "releaseDate",
    option: {
      term: "formatted(2022-01-01)",
    },
  },
  subtitle: {
    key: "details.popularity",
    option: {
      term: "77/100",
    },
  },
  optionalInformation: {
    key: "details.tracksQuantity",
    option: {
      term: 2,
    },
  },
};

export const rawArtistDetailsMock: RawArtistItem = {
  id: "123",
  name: "Artist Name",
  images: [{ url: "image-url", width: "300", height: "300" }],
  followers: { total: 1000 },
  genres: ["Pop", "Rock"],
  popularity: "80",
};

export const rawArtistNoImageDetailsMock: RawArtistItem = {
  ...rawArtistDetailsMock,
  images: [],
};

export const rawAlbumDetailsMock: RawAlbumItem = {
  id: "456",
  name: "Album Name",
  images: [{ url: "album-image-url", width: "300", height: "300" }],
  tracks: {
    items: [
      { id: "1", name: "Track 1", duration_ms: 200000 },
      { id: "2", name: "Track 2", duration_ms: 250000 },
    ],
  },
  popularity: "77",
  release_date: "2022-01-01",
  total_tracks: 2,
};

export const rawAlbumNoImageDetailsMock: RawAlbumItem = {
  ...rawAlbumDetailsMock,
  images: [],
};
