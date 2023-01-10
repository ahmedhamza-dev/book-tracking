/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Book Component testing", () => {
  it("Render Bookk correctly", () => {
    cy.visit("/");
    cy.get("#book").should("exist");
  });
  
  it("Change value select", () => {
    cy.get("#select")
      .select("Currently Reading")
      .should("have.value", "currentlyReading");
  });
})

