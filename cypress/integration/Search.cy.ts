/* eslint-disable no-undef */
/// <reference types="cypress" />
describe("Search Component testing", () => {
    it("Render Bookk correctly", () => {
      cy.visit("http://localhost:3000/search");
      cy.get("#search-bar").should("exist");
    });
    
    it("Check Back button", () => {
        cy.get(".close-search").should('exist');
      cy.visit("http://localhost:3000/search");
      cy.get(".close-search").click();
      cy.get("#books-content").should("exist");
    });
    
    it("Input change", () => {
        cy.visit("http://localhost:3000/search");
        cy.get("#search-input").should('exist').type('Robotics').should('have.value', 'Robotics');
        cy.get("#book").should("exist");
    });
});
