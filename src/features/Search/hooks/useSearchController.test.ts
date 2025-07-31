import { useSearchContext } from "@/context/search/useSearchContext";
import { act, renderHook } from "@testing-library/react";
import {
  beforeEach,
  describe,
  expect,
  it,
  type MockedFunction,
  vi,
} from "vitest";
import useDebounce from "./useDebounce";
import { useSearchController } from "./useSearchController";

vi.mock("@/context/search/useSearchContext", () => ({
  useSearchContext: vi.fn(),
}));

vi.mock("./useDebounce", () => ({
  default: vi.fn(),
}));

describe("useSearchController", () => {
  const mockDispatch = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    (
      useSearchContext as MockedFunction<typeof useSearchContext>
    ).mockReturnValue({
      state: { term: "test", toggle: "artists", offset: "0" },
      dispatch: mockDispatch,
    });

    (useDebounce as MockedFunction<typeof useDebounce>).mockImplementation(
      <T>(value: T) => value
    );
  });

  it("returns correct default values", () => {
    const { result } = renderHook(() => useSearchController());

    expect(result.current.term).toBe("test");
    expect(result.current.type).toBe("artists");
    expect(result.current.debouncedSearch).toBe("test");
    expect(result.current.isQueryEnabled).toBe(true);
  });

  it("isQueryEnabled is false if debouncedSearch is shorter than queryLimit", () => {
    (useDebounce as MockedFunction<typeof useDebounce>).mockReturnValue("a");

    const { result } = renderHook(() => useSearchController(2));

    expect(result.current.isQueryEnabled).toBe(false);
  });

  it("calls dispatch with SET_TERM when setSearch is called", () => {
    const { result } = renderHook(() => useSearchController());

    act(() => {
      result.current.setSearch("new term");
    });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "SET_TERM",
      payload: "new term",
    });
  });

  it("calls dispatch with SET_TOGGLE when toggleType is called", () => {
    const { result } = renderHook(() => useSearchController());

    act(() => {
      result.current.toggleType();
    });

    expect(mockDispatch).toHaveBeenCalledWith({ type: "SET_TOGGLE" });
  });

  it("calls dispatch with CLEAN when clean is called", () => {
    const { result } = renderHook(() => useSearchController());

    act(() => {
      result.current.clean();
    });

    expect(mockDispatch).toHaveBeenCalledWith({ type: "CLEAN" });
  });

  it("uses the provided queryLimit", () => {
    (useDebounce as MockedFunction<typeof useDebounce>).mockReturnValue("ab");

    const { result } = renderHook(() => useSearchController(3));

    expect(result.current.isQueryEnabled).toBe(false);
  });
});
