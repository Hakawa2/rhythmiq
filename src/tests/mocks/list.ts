import type { ListItem } from "@/types/list-type";

export const listMock = [
  { id: "1", title: "Item 1", subtitle: "Subtitle 1" },
  { id: "2", title: "Item 2", subtitle: "Subtitle 2" },
  { id: "3", title: "Item 3", subtitle: "Subtitle 3" },
];

export const artistListMock: ListItem[] = [
  {
    id: "1",
    name: "Artist 1",
    description: {
      key: "description1",
      option: { someOption: "value1" },
    },
    image: "image1.jpg",
    uri: "uri1",
  },
  {
    id: "2",
    name: "Artist 2",
    description: {
      key: "description2",
      option: { someOption: "value2" },
    },
    image: "image2.jpg",
    uri: "uri2",
  },
];

export const albumListMock: ListItem[] = [
  {
    id: "1",
    name: "Album 1",
    description: {
      key: "description1",
      option: { someOption: "value1" },
    },
    image: "image1.jpg",
    uri: "uri1",
  },
  {
    id: "2",
    name: "Artist 2",
    description: {
      key: "description2",
      option: { someOption: "value2" },
    },
    image: "image2.jpg",
    uri: "uri2",
  },
];
