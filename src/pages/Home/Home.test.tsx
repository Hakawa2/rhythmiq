import { homeMock } from "@/tests/mocks/home";
import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Home } from "./Home";

vi.mock("@/context/search/useSearchContext", () => ({
  useSearchContext: () => ({
    state: { offset: "1" },
    dispatch: vi.fn(),
  }),
}));

vi.mock("@/features/Search/hooks/useSearchController", () => ({
  useSearchController: () => ({
    type: "track",
    debouncedSearch: "test",
    isQueryEnabled: true,
  }),
}));

vi.mock("@/hooks/useFindList", () => ({
  useFindList: () => ({
    data: homeMock,
    isLoading: false,
    isError: false,
    isEmpty: false,
  }),
}));

vi.mock("@/components/Header/Header", () => ({
  Header: () => <div>Header</div>,
}));

vi.mock("@/features/Search/SearchInput", () => ({
  SearchInput: () => <input placeholder="Search" />,
}));

vi.mock("@/components/SearchHandler/SearchHandler", () => ({
  SearchHandler: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

vi.mock("@/components/Card/Card", () => ({
  Card: ({ name, description }: { name: string; description: string }) => (
    <div>
      <span>{name}</span>
      <span>{description}</span>
    </div>
  ),
}));

vi.mock("@/components/PaginationController/PaginationController", () => ({
  PaginationController: ({
    handleNewPage,
  }: {
    handleNewPage: (page: string) => void;
  }) => <button onClick={() => handleNewPage("2")}>Next Page</button>,
}));

vi.mock("@/utils/scrollTo.utils", () => ({
  scrollTo: vi.fn(),
}));

describe("Home page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders Header, SearchInput, Card and PaginationController", () => {
    render(<Home />);
    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
    expect(screen.getByText("Test Name")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
    expect(screen.getByText("Next Page")).toBeInTheDocument();
  });

  it("handles pagination click", () => {
    render(<Home />);
    const nextPageBtn = screen.getByText("Next Page");
    fireEvent.click(nextPageBtn);

    expect(nextPageBtn).toBeInTheDocument();
  });
});
