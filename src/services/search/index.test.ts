import { beforeEach, describe, expect, it, vi } from "vitest";
import { searchAlbums, searchArtists, searchFunctionsMap } from "./index";
import * as searchHandlers from "./search-handlers";
import * as searchService from "./search-service";

describe("searchArtists", () => {
  const mockSearchSpotify = vi.fn();
  const mockArtistHandler = vi.fn();

  beforeEach(() => {
    vi.spyOn(searchService, "searchSpotify").mockImplementation(
      mockSearchSpotify
    );
    vi.spyOn(searchHandlers, "artistHandler").mockImplementation(
      mockArtistHandler
    );
    mockSearchSpotify.mockClear();
  });

  it("calls searchSpotify with correct arguments", () => {
    const query = "test artist";
    searchArtists(query);
    expect(mockSearchSpotify).toHaveBeenCalledWith(
      query,
      "0",
      searchHandlers.artistHandler
    );
  });
});

describe("searchAlbums", () => {
  const mockSearchSpotify = vi.fn();
  const mockAlbumHandler = vi.fn();

  beforeEach(() => {
    vi.spyOn(searchService, "searchSpotify").mockImplementation(
      mockSearchSpotify
    );
    vi.spyOn(searchHandlers, "albumHandler").mockImplementation(
      mockAlbumHandler
    );
    mockSearchSpotify.mockClear();
  });

  it("calls searchSpotify with correct arguments", () => {
    const query = "test album";
    const offset = "10";
    searchAlbums(query, offset);
    expect(mockSearchSpotify).toHaveBeenCalledWith(
      query,
      offset,
      searchHandlers.albumHandler
    );
  });
});

describe("searchFunctionsMap", () => {
  it("maps 'artists' to searchArtists", () => {
    expect(searchFunctionsMap.artists).toBe(searchArtists);
  });

  it("maps 'albums' to searchAlbums", () => {
    expect(searchFunctionsMap.albums).toBe(searchAlbums);
  });
});
