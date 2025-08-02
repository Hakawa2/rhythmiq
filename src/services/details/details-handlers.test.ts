import { defaultImage } from "@/constants";

import {
  albumDetailsMock,
  rawAlbumDetailsMock,
  rawAlbumNoImageDetailsMock,
  rawArtistDetailsMock,
  rawArtistNoImageDetailsMock,
} from "@/tests/mocks/details";
import { describe } from "node:test";
import { expect, it, vi } from "vitest";
import {
  albumDetailsHandler,
  artistDetailsHandler,
  topTracksDetailsHandler,
} from "./details-handlers";

vi.mock("@/utils/format.utils", () => ({
  formatDate: vi.fn((date) => `formatted(${date})`),
  formatNumbers: vi.fn((num) => `formattedNum(${num})`),
  formatToTime: vi.fn((ms) => `formattedTime(${ms})`),
}));

describe("artistDetailsHandler.handleItem", () => {
  it("should transform RawArtistItem to ArtistDetails", () => {
    const result = artistDetailsHandler.handleItem(rawArtistDetailsMock);

    expect(result).toMatchObject({
      id: "123",
      image: "image-url",
      name: "Artist Name",
      subtitle: {
        key: "followers",
        option: { term: "formattedNum(1000)" },
      },
      optionalInformation: {
        key: "details.genres",
        option: { term: "Pop,Rock" },
      },
      description: {
        key: "details.popularity",
        option: { term: "80/100" },
      },
    });
  });

  it("should use defaultImage if image is missing", () => {
    const result = artistDetailsHandler.handleItem(rawArtistNoImageDetailsMock);

    expect(result.image).toBe(defaultImage);
  });
});

describe("topTracksDetailsHandler.handleItem", () => {
  it("should format track correctly", () => {
    const track = { id: "t1", name: "Track 1", duration_ms: 123456 };

    const result = topTracksDetailsHandler.handleItem(track);

    expect(result).toEqual({
      id: "t1",
      title: "Track 1",
      subtitle: "Duração: formattedTime(123456)",
    });
  });
});

describe("albumDetailsHandler.handleItem", () => {
  it("should transform RawAlbumItem to AlbumDetails including tracks", () => {
    const result = albumDetailsHandler.handleItem(rawAlbumDetailsMock);

    expect(result).toMatchObject({ albumDetailsMock });
  });

  it("should use defaultImage if album image is missing", () => {
    const result = albumDetailsHandler.handleItem(rawAlbumNoImageDetailsMock);

    expect(result.image).toBe(defaultImage);
  });
});
