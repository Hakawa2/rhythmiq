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
  popularity: string;
  description: string;
  tracksQuantity: string;
  tracks: Track[];
};

export type ArtistDetails = {
  id: string;
  name: string;
  popularity: string;
  followers: string;
  image: string;
  genres: string;
};

export type TopTracksDetails = {
  topTracks: Track[];
};

export type Track = {
  id: string;
  title: string;
  subtitle: string;
};
