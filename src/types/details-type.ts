import type { TranslatableFields } from "./translate-type";

export type DetailsMap = {
  artists: ArtistDetails & TopTracksDetails;
  albums: AlbumDetails;
};

export type DetailsConfig<TRawItem, Item> = {
  type?: "artists" | "albums";
  handleItem: (item: TRawItem) => Item;
};

export type AlbumDetails = {
  id: string;
  name: string;
  image: string;
  tracks: Track[];
} & TranslatableFields;

export type ArtistDetails = {
  id: string;
  name: string;
  image: string;
} & TranslatableFields;

export type TopTracksDetails = {
  topTracks: Track[];
};

export type Track = {
  id: string;
  title: string;
  subtitle: string;
};
