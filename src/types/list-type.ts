export type RawListItem = {
  id: string;
  name: string;
  images: RawImages[];
} & (
  | {
      followers: {
        total: number;
      };
      release_date?: never;
    }
  | {
      followers?: never;
      release_date: Date;
    }
);

type RawImages = {
  url: string;
  height: string;
  width: string;
};

export type ListItem = {
  id: string;
  name: string;
  description: number;
  ariaLabel: string;
  image: string;
  uri: string;
};
