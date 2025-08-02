import apiSpotify from "@/lib/apiSpotify";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  albumDetailsHandler,
  artistDetailsHandler,
  topTracksDetailsHandler,
} from "./details-handlers";
import { findDetails, findTopTrackDetails } from "./details-service";

vi.mock("./details-handlers", () => ({
  artistDetailsHandler: {
    type: "artist",
    handleItem: vi.fn((data) => ({
      ...data,
    })),
  },
  albumDetailsHandler: {
    type: "album",
    handleItem: vi.fn((data) => ({
      ...data,
    })),
  },
  topTracksDetailsHandler: {
    handleItem: vi.fn((data) => ({
      ...data,
    })),
  },
}));

vi.mock("@/lib/apiSpotify", () => ({
  default: {
    get: vi.fn(),
  },
}));

describe("details service", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  describe("findDetails", () => {
    it("should fetch details and apply config.handleItem", async () => {
      const mockResponseData = { id: "123", name: "Test Artist" };

      const spy = vi
        .spyOn(apiSpotify, "get")
        .mockResolvedValue({ data: mockResponseData });

      const result = await findDetails("artists", "123", artistDetailsHandler);

      expect(spy).toHaveBeenCalledWith("artists/123");
      expect(artistDetailsHandler.handleItem).toHaveBeenCalledWith(
        mockResponseData
      );
      expect(result).toEqual(mockResponseData);
    });
  });

  describe("findTopTrackDetails", () => {
    it("should fetch top tracks and apply config.handleItem to each track", async () => {
      const mockTracks = [
        { id: "1", name: "Track 1" },
        { id: "2", name: "Track 2" },
      ];

      const spy = vi
        .spyOn(apiSpotify, "get")
        .mockResolvedValue({ data: { tracks: mockTracks } });

      const result = await findTopTrackDetails("456", topTracksDetailsHandler);

      expect(spy).toHaveBeenCalledWith("artists/456/top-tracks");
      expect(topTracksDetailsHandler.handleItem).toHaveBeenCalledTimes(2);
      expect(result).toEqual({
        topTracks: [...mockTracks],
      });
    });
  });

  describe("findAlbumDetailsHandler", () => {
    it("should fetch album details and apply config.handleItem", async () => {
      const mockResponseData = { id: "456", name: "Test Album" };

      const spy = vi
        .spyOn(apiSpotify, "get")
        .mockResolvedValue({ data: mockResponseData });

      const result = await findDetails("albums", "456", albumDetailsHandler);

      expect(spy).toHaveBeenCalledWith("albums/456");
      expect(albumDetailsHandler.handleItem).toHaveBeenCalledWith(
        mockResponseData
      );
      expect(result).toEqual(mockResponseData);
    });
  });
});
