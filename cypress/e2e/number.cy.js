/// <reference types="Cypress" />

describe("Number Algorithm", () => {
  it("should display - 'Hello', if entered number is greater than 7", () => {
    // Arrange
    cy.visit("/");
    // Act & Execution
    cy.get("#numberInput").click();
    cy.get("#numberInput").type("15");
    cy.get("#check-number-btn").click();
    // Assertion
    cy.get("#number-answer").should("exist");
    cy.get("#number-answer").should("contain.text", "Hello");
  });

  it("should display - 'Number must be more than 7', if entered number is equal to 7", () => {
    // Arrange
    cy.visit("/");
    // Act & Execution
    cy.get("#numberInput").click();
    cy.get("#numberInput").type("7");
    cy.get("#check-number-btn").click();
    // Assertion
    cy.get("#number-answer").should("exist");
    cy.get("#number-answer").should("contain.text", "Number must be more than 7");
  });

  it("should display - 'Number must be more than 7', if entered number is less than 7", () => {
    // Arrange
    cy.visit("/");
    // Act & Execution
    cy.get("#numberInput").click();
    cy.get("#numberInput").type("2");
    cy.get("#check-number-btn").click();
    // Assertion
    cy.get("#number-answer").should("exist");
    cy.get("#number-answer").should("contain.text", "Number must be more than 7");
  });

  it("should display - 'Valid number is not provided!', if user tries to enter string instead of numeric value", () => {
    // Arrange
    cy.visit("/");
    // Act & Execution
    cy.get("#numberInput").invoke("attr", "type", "text").should("have.attr", "type", "text");
    cy.get("#numberInput").click();
    cy.get("#numberInput").type("invalid");
    cy.get("#check-number-btn").click();
    // Assertion
    cy.get("#number-answer").should("exist");
    cy.get("#number-answer").should("contain.text", "Valid number is not provided!");
  });
})
