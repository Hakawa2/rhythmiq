export type Details = ArtistDetails | any;

export type DetailsConfig<TRawItem, Item> = {
  type: "artists" | "albums";
  handleItem: (item: TRawItem) => Item;
};

export type ArtistDetails = {
  id: string;
  name: string;
  popularity: string;
  followers: string;
  image: string;
  genres: string;
  topTracks: Track[];
};

export type Track = {
  id: string;
  name: string;
  duration_ms: string;
};
