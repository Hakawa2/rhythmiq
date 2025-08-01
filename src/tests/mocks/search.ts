import type { Albums, Artists } from "@/types/list-type";

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

export const rawSearchListAlbumsResponseMock = {
  data: {
    albums: {
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

export const mockArtist: Artists = {
  artists: {
    href: "https://api.spotify.com/v1/artists",
    items: [
      {
        id: "1",
        name: "Artist Name",
        images: [{ url: "image-url", height: "1", width: "1" }],
        followers: { total: 12345 },
        genres: ["Pop", "Rock"],
        popularity: "80",
      },
    ],
    limit: 20,
    next: null,
    offset: 0,
    previous: null,
    total: 1,
  },
};

export const mockAlbum: Albums = {
  albums: {
    href: "https://api.spotify.com/v1/albums",
    items: [
      {
        id: "10",
        name: "Album Name",
        images: [{ url: "album-image", height: "1", width: "1" }],
        release_date: "2020-01-01",
        total_tracks: 10,
        tracks: { items: [] },
        popularity: "75",
      },
    ],
    limit: 20,
    offset: 0,
    previous: "pagination-prev-url",
    next: "pagination-next-url",
    total: 42,
  },
};

export const mockArtistNoImage: Artists = {
  artists: {
    ...mockArtist.artists,
    href: "https://api.spotify.com/v1/artists",
    items: [
      {
        ...mockArtist.artists.items[0],
        images: [],
      },
    ],
  },
};

export const mockAlbumNoImage: Albums = {
  albums: {
    ...mockAlbum.albums,
    href: "https://api.spotify.com/v1/albums",
    items: [
      {
        ...mockAlbum.albums.items[0],
        images: [],
      },
    ],
  },
};

export const mockAlbumNoPagination: Albums = {
  albums: {
    ...mockAlbum.albums,
    href: "https://api.spotify.com/v1/albums",
    previous: null,
    next: null,
    total: 0,
  },
};
