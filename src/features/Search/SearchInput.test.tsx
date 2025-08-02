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
  Input: ({ placeholder, value, setValue }: any) => (
    <input
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      data-testid="search-input"
    />
  ),
}));

vi.mock("@/components/ui/label", () => ({
  Label: ({ children, ...props }: any) => <label {...props}>{children}</label>,
}));

vi.mock("@/components/ui/switch", () => ({
  Switch: ({ checked, onCheckedChange, ...props }: any) => (
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onCheckedChange(e.target.checked)}
      {...props}
      data-testid="search-switch"
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

  it("renders switch checked when type is albums", () => {
    controller.type = "albums";

    render(<SearchInput />);
    const switchInput = screen.getByTestId("search-switch") as HTMLInputElement;

    expect(switchInput.checked).toBe(true);
  });

  it("renders switch unchecked when type is not albums", () => {
    controller.type = "tracks";

    render(<SearchInput />);
    const switchInput = screen.getByTestId("search-switch") as HTMLInputElement;

    expect(switchInput.checked).toBe(false);
  });

  it("calls toggleType when switch is toggled", () => {
    render(<SearchInput />);

    const switchInput = screen.getByTestId("search-switch");
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
