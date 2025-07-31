import type { searchFunctionsMap } from "@/services/search";
import type { List, ListItem } from "./list-type";

export type SearchType = keyof typeof searchFunctionsMap;

export type SearchConfig<TData, TRawItem> = {
  type: "artist" | "album";
  getItems: (data: TData) => TRawItem[];
  mapItem: (item: TRawItem) => ListItem;
  getPagination?: (data: TData) => List["pagination"];
};
