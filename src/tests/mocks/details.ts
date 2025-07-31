import type { DetailsMap } from "@/types/details-type";

const commonDetails = {
  description: {
    key: "details.popularity",
    option: {
      term: "Popular",
    },
  },
  subtitle: {
    key: "details.followers",
    option: {
      term: "1000",
    },
  },
  optionalInformation: {
    key: "details.genres",
    option: {
      term: "Pop, Rock",
    },
  },
};

export const artistDetailsMock: DetailsMap["artists"] = {
  id: "123",
  image: "image-url",
  name: "Artist Name",
  topTracks: [{ id: "1", title: "Track 1", subtitle: "Artist 1" }],
  ...commonDetails,
};

export const albumDetailsMock: DetailsMap["albums"] = {
  id: "456",
  image: "album-image-url",
  name: "Album Name",
  tracks: [{ id: "1", title: "Track 1", subtitle: "Artist 1" }],
  ...commonDetails,
};
