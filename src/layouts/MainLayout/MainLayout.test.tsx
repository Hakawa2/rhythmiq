import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import MainLayout from "./MainLayout";

const setSavedLanguage = vi.fn();
vi.mock("@/hooks/useTranslate", () => ({
  useTranslate: () => ({ setSavedLanguage }),
}));

vi.mock("@/components/Container/Container", () => ({
  Container: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="container">{children}</div>
  ),
}));

vi.mock("@/components/Footer/Footer", () => ({
  Footer: () => <footer data-testid="footer">Footer</footer>,
}));

vi.mock("@/components/LanguageToggle/LanguageToggle", () => ({
  LanguageToggle: () => <button data-testid="language-toggle">Language</button>,
}));

describe("MainLayout", () => {
  it("renders the layout structure", () => {
    render(
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>
    );

    expect(screen.getByTestId("language-toggle")).toBeInTheDocument();
    expect(screen.getByTestId("container")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("renders children via Outlet", async () => {
    vi.mock("react-router-dom", async () => {
      const actual = await vi.importActual<any>("react-router-dom");
      return {
        ...actual,
        Outlet: () => <div data-testid="outlet">Outlet Content</div>,
      };
    });

    const MainLayoutWithMockedOutlet = (await import("./MainLayout")).default;

    render(
      <MemoryRouter>
        <MainLayoutWithMockedOutlet />
      </MemoryRouter>
    );

    expect(screen.getByTestId("outlet")).toHaveTextContent("Outlet Content");
  });
});
