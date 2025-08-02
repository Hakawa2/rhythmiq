import { afterEach } from "node:test";
import { describe, expect, it, vi } from "vitest";

import { searchAlbums, searchArtists, searchFunctionsMap } from ".";

import { albumHandler, artistHandler } from "./search-handlers";
import * as searchService from "./search-service";

describe("search handlers map", () => {
  const mocksearchList = vi.spyOn(searchService, "searchList");

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should call searchList with artistHandler in searchArtists", () => {
    const query = "radiohead";
    searchArtists(query);

    expect(mocksearchList).toHaveBeenCalledWith(query, "0", artistHandler);
  });

  it("should call searchList with albumHandler in searchAlbums", () => {
    const query = "metallica";
    const offset = "20";
    searchAlbums(query, offset);

    expect(mocksearchList).toHaveBeenCalledWith(query, offset, albumHandler);
  });

  it("searchFunctionsMap should map 'artists' to searchArtists", () => {
    expect(searchFunctionsMap.artists).toBe(searchArtists);
  });

  it("searchFunctionsMap should map 'albums' to searchAlbums", () => {
    expect(searchFunctionsMap.albums).toBe(searchAlbums);
  });
});
