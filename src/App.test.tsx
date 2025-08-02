import { render } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { App } from "./App";

vi.mock("./context/search/search-provider", () => ({
  SearchProvider: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));

vi.mock("./router", () => ({
  router: {},
}));

describe("App", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders without crashing", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("router-provider")).toBeInTheDocument();
  });
});
