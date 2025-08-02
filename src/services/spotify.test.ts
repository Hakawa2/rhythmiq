import apiSpotifyAuth from "@/lib/apiAuth";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { fetchAndStoreSpotifyToken, getStoredSpotifyToken } from "./spotify";

vi.mock("@/lib/apiAuth", () => ({
  default: {
    post: vi.fn(),
  },
}));

const mockedApi = apiSpotifyAuth as unknown as {
  post: ReturnType<typeof vi.fn>;
};

describe("spotify service token", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  describe("fetchAndStoreSpotifyToken", () => {
    it("should fetch token and store it in localStorage", async () => {
      const mockResponse = {
        data: {
          access_token: "mock_token",
          token_type: "Bearer",
          expires_in: 3600,
          scope: "",
        },
      };

      mockedApi.post.mockResolvedValue(mockResponse);

      const tokenData = await fetchAndStoreSpotifyToken();

      expect(mockedApi.post).toHaveBeenCalledWith(
        "/token",
        expect.any(URLSearchParams),
        expect.objectContaining({
          headers: expect.objectContaining({
            Authorization: expect.stringContaining("Basic"),
          }),
        })
      );

      expect(tokenData.access_token).toBe("mock_token");
      expect(localStorage.getItem("spotify_token")).toBe("mock_token");

      const expiresAt = parseInt(
        localStorage.getItem("spotify_token_expires_at") || "0",
        10
      );
      expect(expiresAt).toBeGreaterThan(Date.now());
    });
  });

  describe("getStoredSpotifyToken", () => {
    it("should return the stored token if not expired", () => {
      localStorage.setItem("spotify_token", "stored_token");
      localStorage.setItem(
        "spotify_token_expires_at",
        (Date.now() + 60000).toString()
      );

      const token = getStoredSpotifyToken();

      expect(token).toBe("stored_token");
    });

    it("should return null if token is expired", () => {
      localStorage.setItem("spotify_token", "expired_token");
      localStorage.setItem(
        "spotify_token_expires_at",
        (Date.now() - 1000).toString()
      );

      const token = getStoredSpotifyToken();

      expect(token).toBeNull();
    });

    it("should return null if no token is found", () => {
      const token = getStoredSpotifyToken();
      expect(token).toBeNull();
    });
  });
});
