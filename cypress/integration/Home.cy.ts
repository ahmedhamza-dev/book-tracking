/* eslint-disable no-undef */
/// <reference types="cypress" />
describe("Home Component testing", () => {
  it("Render Home page correctly", () => {
    cy.visit("/");
    cy.get("#books-content").should("exist");
  });

  it("Dropdown is rendered", () => {
    cy.get("#changer")
      .find("#select")
      .should("exist");
  });
  it("Select Currently Reading value", () => {
    cy.get("#select")
      .select("Currently Reading")
      .should("have.value", "currentlyReading");
  });

  it("Check router link", () => {
    cy.get(".open-search-link").click();
    cy.get("#search-bar").should("exist");
  });
});
