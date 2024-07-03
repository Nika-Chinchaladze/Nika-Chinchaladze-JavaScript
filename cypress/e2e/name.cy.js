/// <reference types="Cypress" />

describe("Name Algorithm", () => {
    it("should display - 'Hello, John', if entered name matches John", () => {
        // Arrange
        cy.visit("/");
        // Act & Execution
        cy.get("#nameInput").click();
        cy.get("#nameInput").type("John");
    });
});
