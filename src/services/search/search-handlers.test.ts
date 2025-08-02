import { defaultImage } from "@/constants";
import {
  mockAlbum,
  mockAlbumNoImage,
  mockAlbumNoPagination,
  mockArtist,
  mockArtistNoImage,
} from "@/tests/mocks/search";
import type { Albums, Artists } from "@/types/list-type";
import { describe, expect, it, vi } from "vitest";
import { albumHandler, artistHandler } from "./search-handlers";

vi.mock("@/utils/format.utils", () => ({
  formatDate: (date: string) => `formatted-${date}`,
  formatNumbers: (num: number) => `formatted-${num}`,
}));

vi.mock("@/utils/pagination.utils", () => ({
  getPagination: (url: string | null) => (url ? `pagination-${url}` : null),
}));

describe("artistHandler", () => {
  it("should have type 'artist'", () => {
    expect(artistHandler.type).toBe("artist");
  });

  it("getItems returns artists items", () => {
    expect(artistHandler.getItems(mockArtist)).toBe(mockArtist.artists.items);
  });

  it("getItems returns empty array if no artists", () => {
    expect(artistHandler.getItems({} as Artists)).toEqual([]);
  });

  it("mapItem maps artist correctly", () => {
    expect(artistHandler.mapItem(mockArtist.artists.items[0])).toEqual({
      id: "1",
      name: "Artist Name",
      image: "image-url",
      description: {
        key: "followers",
        option: {
          term: "formatted-12345",
        },
      },
      uri: "artists/1",
    });
  });

  it("mapItem uses defaultImage if no image", () => {
    expect(
      artistHandler.mapItem(mockArtistNoImage.artists.items[0]).image
    ).toBe(defaultImage);
  });
});

describe("albumHandler", () => {
  it("should have type 'album'", () => {
    expect(albumHandler.type).toBe("album");
  });

  it("getItems returns albums items", () => {
    expect(albumHandler.getItems(mockAlbum)).toEqual(mockAlbum.albums.items);
  });

  it("getItems returns empty array if no albums", () => {
    expect(albumHandler.getItems({} as Albums)).toEqual([]);
  });

  it("mapItem maps album correctly", () => {
    expect(albumHandler.mapItem(mockAlbum.albums.items[0])).toEqual({
      id: "10",
      name: "Album Name",
      image: "album-image",
      description: {
        key: "releaseDate",
        option: {
          term: "formatted-2020-01-01",
        },
      },
      uri: "albums/10",
    });
  });

  it("mapItem uses defaultImage if no image", () => {
    expect(albumHandler.mapItem(mockAlbumNoImage.albums.items[0]).image).toBe(
      defaultImage
    );
  });

  it("getPagination returns correct pagination object", () => {
    expect(albumHandler.getPagination!(mockAlbum)).toEqual({
      previous: "pagination-pagination-prev-url",
      next: "pagination-pagination-next-url",
      total: 42,
    });
  });

  it("getPagination handles null previous/next", () => {
    expect(albumHandler.getPagination!(mockAlbumNoPagination)).toEqual({
      previous: null,
      next: null,
      total: 0,
    });
  });
});
