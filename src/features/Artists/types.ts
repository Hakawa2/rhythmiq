export type RawArtist = {
  id: string;
  name: string;
  popularity: number;
  images: RawImages[];
};

type RawImages = {
  url: string;
  height: string;
  width: string;
};

export type Artist = {
  id: string;
  name: string;
  popularity: number;
  image: string;
  uri: string;
};
