import { cardMock } from "@/tests/mocks/card";
import { fireEvent, render, screen } from "@testing-library/react";

import { renderWithRouter } from "@/tests/utils";
import { MemoryRouter, Route, Routes, useLocation } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import { Card } from "./Card";

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<typeof import("react-router-dom")>(
    "react-router-dom"
  );
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

function LocationDisplay() {
  const location = useLocation();
  return <div data-testid="location-display">{location.pathname}</div>;
}

describe("Card component", () => {
  it("should render card component", () => {
    const { ariaLabel, description, image, name, url } = cardMock;

    renderWithRouter(
      <Card
        url={url}
        ariaLabel={ariaLabel}
        description={description}
        name={name}
        image={image}
      />
    );

    const card = screen.getByTestId("card-link");

    expect(card).toBeInTheDocument();
  });

  it("should call redirect to mock-url on click", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Card {...cardMock} />} />
          <Route path="/mock-url" element={<div>Mock URL Page</div>} />
        </Routes>
        <LocationDisplay />
      </MemoryRouter>
    );

    const link = screen.getByTestId("card-link");
    fireEvent.click(link);

    expect(screen.getByText("Mock URL Page")).toBeInTheDocument();
  });
});
