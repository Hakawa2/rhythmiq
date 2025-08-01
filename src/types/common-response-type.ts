export type RawArtistItem = {
  followers: {
    total: number;
  };
  genres: string[];
} & RawCommonItem;

export type RawAlbumItem = {
  release_date: string;
  total_tracks: number;
  tracks: {
    items: RawTopTrack[];
  };
} & RawCommonItem;

export type RawCommonItem = {
  id: string;
  name: string;
  images: RawImages[];
  popularity: string;
};

export type RawTopTrack = {
  id: string;
  name: string;
  duration_ms: number;
};

type RawImages = {
  url: string;
  height: string;
  width: string;
};
