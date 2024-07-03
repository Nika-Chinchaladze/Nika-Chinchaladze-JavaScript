/// <reference types="Cypress" />

describe("Array Algorithm", () => {
    it("should display array that contains multiplies of 3, when an array of numeric values is provided", () => {
        // Arrange
        cy.visit("/");
        // Act & Execution
        cy.get("#arrayInput").click();
        cy.get("#arrayInput").type("[1, 2, 3, 4, 5, 6]");
        cy.get("#check-array-btn").click();
        // Assertion
        cy.get("#array-answer").should("exist");
        cy.get("#array-answer").should("contain.text", "[ 3, 6]");
    });

    it("should display error message, when provided array contains non-numeric values", () => {
        // Arrange
        cy.visit("/");
        const errorMessage = "Please provide an array of Numeric values as shown in the example!";
        // Act & Execution
        cy.get("#arrayInput").click();
        cy.get("#arrayInput").type("[1, 2, 3, 'string']");
        cy.get("#check-array-btn").click();
        // Assertion
        cy.get("#array-answer").should("exist");
        cy.get("#array-answer").should("contain.text", errorMessage);
    });

    it("should display error message, when there is provided string that can not be converted into array", () => {
        // Arrange
        cy.visit("/");
        const errorMessage = "Please provide an array of Numeric values as shown in the example!";
        // Act & Execution
        cy.get("#arrayInput").click();
        cy.get("#arrayInput").type("common string");
        cy.get("#check-array-btn").click();
        // Assertion
        cy.get("#array-answer").should("exist");
        cy.get("#array-answer").should("contain.text", errorMessage);
    });

    it("should display error message, when there is provided object that can not be converted into array", () => {
        // Arrange
        cy.visit("/");
        const myObject = { name: "Nika" };
        const errorMessage = "Please provide an array of Numeric values as shown in the example!";
        // Act & Execution
        cy.get("#arrayInput").click();
        cy.get("#arrayInput").type(`${myObject}`);
        cy.get("#check-array-btn").click();
        // Assertion
        cy.get("#array-answer").should("exist");
        cy.get("#array-answer").should("contain.text", errorMessage);
    });

    it("should display error message, when there is provided numbers without opening and closing brackets", () => {
        // Arrange
        cy.visit("/");
        const errorMessage = "Please provide an array of Numeric values as shown in the example!";
        // Act & Execution
        cy.get("#arrayInput").click();
        cy.get("#arrayInput").type("1, 2, 3, 4, 5");
        cy.get("#check-array-btn").click();
        // Assertion
        cy.get("#array-answer").should("exist");
        cy.get("#array-answer").should("contain.text", errorMessage);
    });

    it("should display error message, when array is provided with extra symbols", () => {
        // Arrange
        cy.visit("/");
        const errorMessage = "Please provide an array of Numeric values as shown in the example!";
        // Act & Execution
        cy.get("#arrayInput").click();
        cy.get("#arrayInput").type("[1, 2, 3, 4, 5]]");
        cy.get("#check-array-btn").click();
        // Assertion
        cy.get("#array-answer").should("exist");
        cy.get("#array-answer").should("contain.text", errorMessage);
    });
});
