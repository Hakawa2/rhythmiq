import * as searchService from "@/services/search/search-service";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";

import { albumListMock, artistListMock } from "@/tests/mocks/list";
import type { SearchType } from "@/types/search-types";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useFindList } from "./useFindList";

vi.mock("@/services/details/details-service");

const queryClient = new QueryClient();

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("useFindList", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    queryClient.clear();
  });

  it("should fetch artists list successfully", async () => {
    vi.spyOn(searchService, "searchList").mockResolvedValue({
      items: artistListMock,
    });

    const { result } = renderHook(
      () => useFindList("metallica", "1", "artists"),
      {
        wrapper,
      }
    );

    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.isError).toBe(false);
    expect(result.current.data).toEqual({ items: artistListMock });
  });

  it("should fetch albums list successfully", async () => {
    vi.spyOn(searchService, "searchList").mockResolvedValue({
      items: albumListMock,
    });

    const { result } = renderHook(
      () => useFindList("st. anger", "1", "albums"),
      {
        wrapper,
      }
    );

    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.isError).toBe(false);
    expect(result.current.data).toEqual({ items: albumListMock });
  });

  it("should return error for invalid type", async () => {
    vi.spyOn(searchService, "searchList").mockRejectedValue(
      new Error("Artist not found")
    );

    const { result } = renderHook(
      () => useFindList("error", "1", "UNKNOWN" as SearchType),
      {
        wrapper,
      }
    );

    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.isError).toBe(true);
  });

  it("should not fetch list", async () => {
    vi.spyOn(searchService, "searchList").mockRejectedValue({
      items: artistListMock,
    });

    const { result } = renderHook(
      () => useFindList("error", "1", "artists", { enabled: false }),
      {
        wrapper,
      }
    );

    await waitFor(() => expect(result.current.isLoading).toBe(false));
  });

  it("should return empty list", async () => {
    vi.spyOn(searchService, "searchList").mockResolvedValue({
      items: [],
    });

    const { result } = renderHook(
      () => useFindList("metallica", "1", "artists"),
      {
        wrapper,
      }
    );

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.isError).toBe(false);
    expect(result.current.isEmpty).toBe(true);
  });
});
