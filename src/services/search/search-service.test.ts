import apiSpotify from "@/lib/apiSpotify";
import {
  mockAlbum,
  mockArtist,
  rawSearchListResponseMock,
} from "@/tests/mocks/search";
import type { RawArtistItem } from "@/types/common-response-type";
import type { Artists } from "@/types/list-type";
import type { SearchConfig } from "@/types/search-types";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { albumHandler, artistHandler } from "./search-handlers";
import { searchSpotify } from "./search-service";

vi.mock("./search-handlers", () => ({
  artistHandler: {
    type: "artist",
    getItems: vi.fn(() => mockArtist.artists.items || []),
    mapItem: vi.fn((data) => ({
      ...data,
    })),
  },
  albumHandler: {
    type: "album",
    getItems: vi.fn(() => mockAlbum.albums.items || []),
    mapItem: vi.fn((data) => ({
      ...data,
    })),
    getPagination: vi.fn(() => ({
      total: mockAlbum.albums.total,
      prev: mockAlbum.albums.previous,
      next: mockAlbum.albums.next,
    })),
  },
}));

vi.mock("@/lib/apiSpotify", () => ({
  default: {
    get: vi.fn(),
  },
}));

describe("searchSpotify", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("calls apiSpotify.get with correct params", async () => {
    vi.spyOn(apiSpotify, "get").mockResolvedValueOnce(
      rawSearchListResponseMock
    );

    await searchSpotify("test", "5", artistHandler);

    expect(apiSpotify.get).toHaveBeenCalledWith("/search", {
      params: {
        q: "test",
        type: "artist",
        offset: "5",
      },
    });
  });

  it("returns mapped items and pagination", async () => {
    vi.spyOn(apiSpotify, "get").mockResolvedValueOnce(
      rawSearchListResponseMock
    );

    const result = await searchSpotify("test", "0", albumHandler);

    expect(result.items).toEqual(mockAlbum.albums.items);
  });

  it("works without getPagination", async () => {
    const configNoPagination: SearchConfig<Artists, RawArtistItem> = {
      ...artistHandler,
    };

    vi.spyOn(apiSpotify, "get").mockResolvedValueOnce({
      data: rawSearchListResponseMock,
    });

    const result = await searchSpotify("test", "0", configNoPagination);

    expect(result.items.length).toBe(1);
    expect(result.pagination).toBeUndefined();
  });
});
