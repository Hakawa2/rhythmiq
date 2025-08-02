import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import NotFound from "./NotFound";

describe("NotFound", () => {
  it("renders the 'Página não encontrada' message", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    expect(screen.getByText("Página Não Encontrada")).toBeInTheDocument();
  });

  it("renders the detailed error message", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    expect(
      screen.getByText(
        /A página que você está procurando não existe ou o ID é inválido./i
      )
    ).toBeInTheDocument();
  });

  it("renders the link to the home page", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    const link = screen.getByRole("link", {
      name: /Voltar para a Página Inicial/i,
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });
});
