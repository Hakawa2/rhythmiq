import { defaultImage } from "@/constants";
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
  const mockArtist = {
    id: "1",
    name: "Artist Name",
    images: [{ url: "image-url" }],
    followers: { total: 12345 },
  };

  const mockArtistNoImage = {
    ...mockArtist,
    images: [],
  };

  const mockArtistNoFollowers = {
    ...mockArtist,
    followers: undefined,
  };

  it("should have type 'artist'", () => {
    expect(artistHandler.type).toBe("artist");
  });

  it("getItems returns artists items", () => {
    const data = { artists: { items: [mockArtist] } };
    expect(artistHandler.getItems(data as any)).toEqual([mockArtist]);
  });

  it("getItems returns empty array if no artists", () => {
    expect(artistHandler.getItems({} as any)).toEqual([]);
  });

  it("mapItem maps artist correctly", () => {
    expect(artistHandler.mapItem(mockArtist as any)).toEqual({
      id: "1",
      name: "Artist Name",
      image: "image-url",
      ariaLabel: "Artista Artist Name",
      description: "Seguidores: formatted-12345",
      uri: "artists/1",
    });
  });

  it("mapItem uses defaultImage if no image", () => {
    expect(artistHandler.mapItem(mockArtistNoImage as any).image).toBe(
      defaultImage
    );
  });

  it("mapItem handles missing followers", () => {
    expect(
      artistHandler.mapItem(mockArtistNoFollowers as any).description
    ).toBe("Seguidores: formatted-undefined");
  });
});

describe("albumHandler", () => {
  const mockAlbum = {
    id: "10",
    name: "Album Name",
    images: [{ url: "album-image" }],
    release_date: "2020-01-01",
  };

  const mockAlbumNoImage = {
    ...mockAlbum,
    images: [],
  };

  it("should have type 'album'", () => {
    expect(albumHandler.type).toBe("album");
  });

  it("getItems returns albums items", () => {
    const data = { albums: { items: [mockAlbum] } };
    expect(albumHandler.getItems(data as any)).toEqual([mockAlbum]);
  });

  it("getItems returns empty array if no albums", () => {
    expect(albumHandler.getItems({} as any)).toEqual([]);
  });

  it("mapItem maps album correctly", () => {
    expect(albumHandler.mapItem(mockAlbum as any)).toEqual({
      id: "10",
      name: "Album Name",
      image: "album-image",
      ariaLabel: "Álbum Album Name",
      description: "Data de lançamento: formatted-2020-01-01",
      uri: "albums/10",
    });
  });

  it("mapItem uses defaultImage if no image", () => {
    expect(albumHandler.mapItem(mockAlbumNoImage as any).image).toBe(
      defaultImage
    );
  });

  it("getPagination returns correct pagination object", () => {
    const data = {
      albums: {
        previous: "prev-url",
        next: "next-url",
        total: 42,
      },
    };
    expect(albumHandler.getPagination!(data as any)).toEqual({
      previous: "pagination-prev-url",
      next: "pagination-next-url",
      total: 42,
    });
  });

  it("getPagination handles null previous/next", () => {
    const data = {
      albums: {
        previous: null,
        next: null,
        total: 0,
      },
    };
    expect(albumHandler.getPagination!(data as any)).toEqual({
      previous: null,
      next: null,
      total: 0,
    });
  });
});
