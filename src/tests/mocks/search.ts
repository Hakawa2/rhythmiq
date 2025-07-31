export const rawSearchListResponseMock = {
  data: {
    artists: {
      items: [
        { id: "1", name: "Artist 1", image: "image-url-1" },
        { id: "2", name: "Artist 2", image: "image-url-2" },
      ],
      total: 2,
      next: null,
      previous: null,
    },
  },
};

export const parsedSearchListResponseMock = [
  {
    id: "1",
    name: "Artist 1",
    image: "image-url-1",
  },
  {
    id: "2",
    name: "Artist 2",
    image: "image-url-2",
  },
];
