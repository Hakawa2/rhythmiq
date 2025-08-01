import { afterEach, describe, expect, it, vi } from "vitest";
import {
  findAlbumDetails,
  findArtistDetails,
  findDetailsFunctionsMap,
} from ".";
import {
  albumDetailsHandler,
  artistDetailsHandler,
  topTracksDetailsHandler,
} from "./details-handlers";
import * as detailsService from "./details-service";

describe("details handlers map", () => {
  const mockFindDetails = vi.spyOn(detailsService, "findDetails");
  const mockFindTopTrackDetails = vi.spyOn(
    detailsService,
    "findTopTrackDetails"
  );

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should call findDetails and findTopTrackDetails in findArtistDetails", async () => {
    const query = "123";

    const mockArtistData = { name: "Mock Artist" };
    const mockTopTracksData = { topTracks: ["track1", "track2"] };

    mockFindDetails.mockResolvedValue(mockArtistData);
    mockFindTopTrackDetails.mockResolvedValue(mockTopTracksData);

    const result = await findArtistDetails(query);

    expect(mockFindDetails).toHaveBeenCalledWith(
      "artists",
      query,
      artistDetailsHandler
    );
    expect(mockFindTopTrackDetails).toHaveBeenCalledWith(
      query,
      topTracksDetailsHandler
    );

    expect(result).toEqual({
      ...mockArtistData,
      ...mockTopTracksData,
    });
  });

  it("should call findDetails with albumDetailsHandler in findAlbumDetails", () => {
    const query = "456";

    findAlbumDetails(query);

    expect(mockFindDetails).toHaveBeenCalledWith(
      "albums",
      query,
      albumDetailsHandler
    );
  });

  it("findDetailsFunctionsMap should map 'artists' to findArtistDetails", () => {
    expect(findDetailsFunctionsMap.artists).toBe(findArtistDetails);
  });

  it("findDetailsFunctionsMap should map 'albums' to findAlbumDetails", () => {
    expect(findDetailsFunctionsMap.albums).toBe(findAlbumDetails);
  });
});
