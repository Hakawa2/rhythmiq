import * as detailsService from "@/services/details/details-service";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";

import { albumDetailsMock, artistDetailsMock } from "@/tests/mocks/details";
import type { SearchType } from "@/types/search-types";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { createQueryFn, useFindDetails } from "./useFindDetails";

vi.mock("@/services/details/details-service");

const queryClient = new QueryClient();

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("useFindDetails", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    queryClient.clear();
  });

  it("should fetch albums details successfully", async () => {
    vi.spyOn(detailsService, "findDetails").mockResolvedValue({
      data: albumDetailsMock,
    });

    const { result } = renderHook(() => useFindDetails("albums", "1"), {
      wrapper,
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.isError).toBe(false);
    expect(result.current.data).toEqual({ data: { ...albumDetailsMock } });
  });

  it("should fetch artist details successfully", async () => {
    vi.spyOn(detailsService, "findDetails").mockResolvedValue({
      data: artistDetailsMock,
    });

    const { result } = renderHook(() => useFindDetails("artists", "1"), {
      wrapper,
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.isError).toBe(false);
    expect(result.current.data).toEqual({ data: { ...artistDetailsMock } });
  });

  it("should return error for invalid type", async () => {
    vi.spyOn(detailsService, "findDetails").mockRejectedValue(
      new Error("Artist not found")
    );

    const { result } = renderHook(
      () => useFindDetails("UNKNOWN" as SearchType, "12"),
      {
        wrapper,
      }
    );

    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.isError).toBe(true);
  });

  it("should return error for undefined id", async () => {
    const fn = createQueryFn("artists", undefined);
    await expect(fn()).rejects.toThrow("Missing ID");
  });
});
