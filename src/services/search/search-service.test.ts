import apiSpotify from "@/lib/apiSpotify";
import {
  parsedSearchListResponseMock,
  rawSearchListResponseMock,
} from "@/tests/mocks/search";
import type { RawArtistItem } from "@/types/common-response-type";
import type { Artists } from "@/types/list-type";
import type { SearchConfig } from "@/types/search-types";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { artistHandler } from "./search-handlers";
import { searchSpotify } from "./search-service";

vi.mock("./search-handlers", () => ({
  artistHandler: {
    type: "artist",
    getItems: vi.fn(() => rawSearchListResponseMock.data.artists.items || []),
    mapItem: vi.fn((data) => ({
      ...data,
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

    const result = await searchSpotify("test", "0", artistHandler);

    expect(result.items).toEqual(parsedSearchListResponseMock);
  });

  it("works without getPagination", async () => {
    const configNoPagination: SearchConfig<Artists, RawArtistItem> = {
      ...artistHandler,
    };

    vi.spyOn(apiSpotify, "get").mockResolvedValueOnce({
      data: rawSearchListResponseMock,
    });

    const result = await searchSpotify("test", "0", configNoPagination);

    expect(result.items.length).toBe(2);
    expect(result.pagination).toBeUndefined();
  });
});
