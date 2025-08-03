describe("Language", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should change language", () => {
    cy.contains("EN").should("exist");
    cy.get("[data-testid='language-toggle-button']").click();
    cy.contains("PTBR").should("exist");
    cy.contains("Descubra seu novo artista favorito!!").should("exist");
  });
});
