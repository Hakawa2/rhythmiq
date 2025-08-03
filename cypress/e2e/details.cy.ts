describe("Details", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should show details for metallica", () => {
    cy.get("[data-testid='search-input']").type("metallica");
    cy.get("[data-testid='card-link']")
      .first()
      .should("contain.text", "Metallica")
      .click();
    cy.url().should("include", "/artists");
    cy.get("h1").should("contain.text", "Metallica");
    cy.get("li:visible").should("have.length", 10);
  });

  it("should show details for album st. anger", () => {
    cy.get("[data-testid='search-type-switch']").click();
    cy.get("[data-testid='search-input']").type("st. anger");
    cy.get("[data-testid='card-link']")
      .first()
      .should("contain.text", "St. Anger")
      .click();

    cy.url().should("include", "/albums");
    cy.get("h1").should("contain.text", "St. Anger");
    cy.get("li:visible").should("have.length", 11);
  });
});
