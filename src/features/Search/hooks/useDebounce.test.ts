import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import useDebounce from "./useDebounce";

describe("useDebounce", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it("should return the initial value immediately", () => {
    const { result } = renderHook(() => useDebounce("test", 500));
    expect(result.current).toBe("test");
  });

  it("should debounce value changes", () => {
    let value = "first";
    const { result, rerender } = renderHook(
      ({ val }) => useDebounce(val, 300),
      {
        initialProps: { val: value },
      }
    );

    expect(result.current).toBe("first");

    value = "second";
    rerender({ val: value });

    expect(result.current).toBe("first");

    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(result.current).toBe("second");
  });

  it("should reset debounce timer on rapid value changes", () => {
    let value = "a";
    const { result, rerender } = renderHook(
      ({ val }) => useDebounce(val, 200),
      {
        initialProps: { val: value },
      }
    );

    value = "b";
    rerender({ val: value });

    act(() => {
      vi.advanceTimersByTime(100);
    });

    value = "c";
    rerender({ val: value });

    expect(result.current).toBe("a");

    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(result.current).toBe("c");
  });

  it("should immediately update when value is falsy", () => {
    const { result, rerender } = renderHook(
      ({ val }) => useDebounce(val, 500),
      {
        initialProps: { val: "something" },
      }
    );

    rerender({ val: "" });

    expect(result.current).toBe("");
  });

  it("should work with numbers and falsy zero", () => {
    const { result, rerender } = renderHook(
      ({ val }) => useDebounce(val, 100),
      {
        initialProps: { val: 42 },
      }
    );

    rerender({ val: 0 });

    expect(result.current).toBe(0);
  });
});
