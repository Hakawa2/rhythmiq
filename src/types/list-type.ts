import type { RawAlbumItem, RawArtistItem } from "./common-response-type";
import type { PaginationType } from "./pagination";
import type { SearchType } from "./search-types";

export type SpotifySearchResponse<K extends SearchType, T> = {
  [key in K]: SpotifyItemResponse<T>;
};

export type SpotifyItemResponse<T> = {
  href: string;
  items: T[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
};

export type Artists = SpotifySearchResponse<"artists", RawArtistItem>;
export type Albums = SpotifySearchResponse<"albums", RawAlbumItem>;

export type List = {
  items: ListItem[];
  pagination?: PaginationType;
};

export type ListItem = {
  id: string;
  name: string;
  description: string;
  ariaLabel: string;
  image: string;
  uri: string;
};
