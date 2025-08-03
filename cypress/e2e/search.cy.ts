describe("Home Page - search", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render the homepage", () => {
    cy.contains("Rhythmiq").should("exist");
  });

  it("should search metallica", () => {
    cy.get("[data-testid='search-input']").type("metallica");
    cy.get("[data-testid='card-link']")
      .first()
      .should("contain.text", "Metallica");
  });

  it("should change filter to albums", () => {
    cy.get("[data-testid='search-type-switch']").click();
    cy.get("[data-testid='search-input']").type("brand new eyes");
    cy.get("[data-testid='card-link']")
      .first()
      .should("contain.text", "Brand New Eyes");
  });
});
