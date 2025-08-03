import type { InputProps } from "@/components/Input/Input";
import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { SearchInput } from "./SearchInput";

const setSearch = vi.fn();
const toggleType = vi.fn();
const clean = vi.fn();

let controller = {
  term: "",
  setSearch,
  type: "albums",
  toggleType,
  clean,
};

vi.mock("@/features/Search/hooks/useSearchController", () => ({
  useSearchController: () => controller,
}));

vi.mock("@/components/Input/Input", () => ({
  Input: ({ placeholder, value, setValue }: InputProps) => (
    <input
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      data-testid="search-input"
    />
  ),
}));

describe("SearchInput", () => {
  beforeEach(() => {
    setSearch.mockClear();
    toggleType.mockClear();
    clean.mockClear();
    controller = {
      term: "",
      setSearch,
      type: "albums",
      toggleType,
      clean,
    };
  });

  it("renders input with correct placeholder and value", () => {
    controller.term = "test";

    render(<SearchInput />);
    const input = screen.getByTestId("search-input") as HTMLInputElement;

    expect(input).toBeInTheDocument();
    expect(input.placeholder).toBe("Search Albums");
    expect(input.value).toBe("test");
  });

  it("calls setSearch when input changes", () => {
    render(<SearchInput />);

    const input = screen.getByTestId("search-input");
    fireEvent.change(input, { target: { value: "new value" } });

    expect(setSearch).toHaveBeenCalledWith("new value");
  });

  it("calls toggleType when switch is toggled", () => {
    render(<SearchInput />);

    const switchInput = screen.getByTestId("search-type-switch");
    fireEvent.click(switchInput);

    expect(toggleType).toHaveBeenCalled();
  });

  it("renders label with correct text", () => {
    controller.type = "albums";

    render(<SearchInput />);

    expect(screen.getByText("Albums")).toBeInTheDocument();
  });

  it("calls clean when clean button is clicked", () => {
    render(<SearchInput />);

    const button = screen.getByText("Clean");
    fireEvent.click(button);

    expect(clean).toHaveBeenCalled();
  });
});
