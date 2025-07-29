export type RawArtistItem = {
  followers: {
    total: number;
  };
  popularity: string;
  genres: string[];
} & RawCommonItem;

export type RawAlbumItem = {
  release_date: Date;
} & RawCommonItem;

export type RawCommonItem = {
  id: string;
  name: string;
  images: RawImages[];
};

type RawImages = {
  url: string;
  height: string;
  width: string;
};
