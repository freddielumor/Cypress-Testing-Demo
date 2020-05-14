describe("Book functionality", () => {
  it("successfully adds a book", () => {
    cy.visit("/");
    cy.get(".NewBookForm__book-title").type("Rich dad poor dad");
    cy.get(".NewBookForm__book-author").type("Robert K");
    cy.get(".NewBookForm__form").submit();
    cy.get(".book-list").should("contain", "Rich dad poor dad");
    cy.reload();
  });

  it("successfully stores new book in localstorage", () => {
    cy.visit("/");
    cy.get(".NewBookForm__book-title").type("The richest man in babylon");
    cy.get(".NewBookForm__book-author").type("George S. Clason");
    cy.get(".NewBookForm__form").submit();
    cy.get(".book-list").should("contain", "The richest man in babylon");
    cy.reload();
  });

  it("successfully deletes a book", () => {
    cy.visit("/");
    cy.get(".NewBookForm__book-title").type("Think and grow rich");
    cy.get(".NewBookForm__book-author").type("Napoleon Hill‎");
    cy.get(".NewBookForm__form").submit();
    cy.get(".book-list").should("contain", "Think and grow rich").click();
    cy.get(".book-list").should("not.contain", "The richest man in babylon");
  });
});
