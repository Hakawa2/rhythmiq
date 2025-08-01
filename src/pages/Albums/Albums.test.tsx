import type { DetailsHeaderProps } from "@/components/DetailsHeader/DetailsHeader";
import type { ListProps } from "@/components/List/List";
import type { SearchHandlerProps } from "@/components/SearchHandler/SearchHandler";
import * as useFindDetailsModule from "@/hooks/useFindDetails";
import { albumDetailsMock } from "@/tests/mocks/details";
import type { DetailsMap } from "@/types/details-type";
import type { UseQueryResult } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Albums } from "./Albums";

vi.mock("@/hooks/useFindDetails", () => ({
  useFindDetails: vi.fn(),
}));

const mockedUseFindDetails = vi.mocked(useFindDetailsModule.useFindDetails);

vi.mock("@/components/DetailsHeader/DetailsHeader", () => ({
  DetailsHeader: (props: DetailsHeaderProps) => (
    <div data-testid="details-header">{props.title}</div>
  ),
}));

vi.mock("@/components/List/List", () => ({
  List: (props: ListProps) => <div data-testid="list">{props.title}</div>,
}));

vi.mock("@/components/SearchHandler/SearchHandler", () => ({
  SearchHandler: <T,>({
    children,
    isLoading,
    isError,
  }: SearchHandlerProps<T>) => {
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error!</div>;
    return <div>{children}</div>;
  },
}));

describe("Albums", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders loading state", () => {
    mockedUseFindDetails.mockReturnValue({
      data: undefined,
      isLoading: true,
      isError: false,
    } as UseQueryResult<DetailsMap["albums"]>);

    render(<Albums />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders error state", () => {
    mockedUseFindDetails.mockReturnValue({
      data: undefined,
      isLoading: false,
      isError: true,
    } as UseQueryResult<DetailsMap["albums"]>);

    render(<Albums />);
    expect(screen.getByText("Error!")).toBeInTheDocument();
  });

  it("renders album details and list when data is present", () => {
    mockedUseFindDetails.mockReturnValue({
      data: albumDetailsMock,
      isLoading: false,
      isError: false,
    } as UseQueryResult<DetailsMap["albums"]>);

    render(<Albums />);
    expect(screen.getByTestId("details-header")).toHaveTextContent(
      "Album Name"
    );
    expect(screen.getByTestId("list")).toHaveTextContent("Lista de faixas");
  });

  it("does not render details if data is null", () => {
    mockedUseFindDetails.mockReturnValue({
      data: undefined,
      isLoading: false,
      isError: false,
    } as UseQueryResult<DetailsMap["albums"]>);

    render(<Albums />);
    expect(screen.queryByTestId("details-header")).not.toBeInTheDocument();
    expect(screen.queryByTestId("list")).not.toBeInTheDocument();
  });
});
