describe("Adding a new book", () => {
  it("successfully adds a book", () => {
    cy.visit("/");
    cy.get(".NewBookForm__book-title").type("Rich dad poor dad");
    cy.get(".NewBookForm__book-author").type("Robert K");
    cy.get(".NewBookForm__form").submit();
    cy.get(".book-list").should("contain", "Rich dad poor dad");
  });
});
