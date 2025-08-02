import { mockSearchContextValue } from "@/tests/mocks/context";
import { renderHook } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { SearchContext } from "./search-context";
import { useSearchContext } from "./useSearchContext";

describe("useSearchContext", () => {
  it("returns the context value from SearchContext", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <SearchContext.Provider value={mockSearchContextValue}>
        {children}
      </SearchContext.Provider>
    );

    const { result } = renderHook(() => useSearchContext(), { wrapper });

    expect(result.current).toBe(mockSearchContextValue);
  });
});
