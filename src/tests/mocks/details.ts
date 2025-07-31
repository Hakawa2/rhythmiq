import type { DetailsMap } from "@/types/details-type";

export const artistDetailsMock: DetailsMap["artists"] = {
  id: "123",
  image: "image-url",
  name: "Artist Name",
  popularity: "Popular",
  followers: "1000",
  genres: "a",
  topTracks: [{ id: "1", title: "Track 1", subtitle: "Artist 1" }],
};

export const albumDetailsMock: DetailsMap["albums"] = {
  id: "456",
  image: "album-image-url",
  name: "Album Name",
  description: "2023-01-01",
  tracksQuantity: "10",
  tracks: [{ id: "1", title: "Track 1", subtitle: "Artist 1" }],
  popularity: "Popular",
};
