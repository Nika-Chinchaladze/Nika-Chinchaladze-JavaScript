/// <reference types="Cypress" />

describe("Name Algorithm", () => {
    it("should display - 'Hello, John', if entered name matches John", () => {
        // Arrange
        cy.visit("/");
        // Act & Execution
        cy.get("#nameInput").click();
        cy.get("#nameInput").type("John");
        cy.get("#check-name-btn").click();
        // Assertion
        cy.get("#name-answer").should("exist");
        cy.get("#name-answer").should("contain.text", "Hello, John");
    });

    it("should display - 'There is no such name', if entered name is john (case-sensitive)", () => {
        // Arrange
        cy.visit("/");
        // Act & Execution
        cy.get("#nameInput").click();
        cy.get("#nameInput").type("john");
        cy.get("#check-name-btn").click();
        // Assertion
        cy.get("#name-answer").should("exist");
        cy.get("#name-answer").should("contain.text", "There is no such name");
    });

    it("should display - 'There is no such name', if entered name does not match John", () => {
        // Arrange
        cy.visit("/");
        // Act & Execution
        cy.get("#nameInput").click();
        cy.get("#nameInput").type("Nika");
        cy.get("#check-name-btn").click();
        // Assertion
        cy.get("#name-answer").should("exist");
        cy.get("#name-answer").should("contain.text", "There is no such name");
    });
});
