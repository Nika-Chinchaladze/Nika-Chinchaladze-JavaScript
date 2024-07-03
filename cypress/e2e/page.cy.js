/// <reference types="Cypress" />

describe("Page is loaded", () => {
    it("should load img-logo and heading correctly", () => {
        cy.visit("/");
        cy.get("#andersen-logo").should("exist");
        cy.get('[data-cy="task-heading"]').should("exist").should("have.text", "Technical task for the traineeship candidates");
        cy.get('[data-cy="task-direction"]').should("exist").should("have.text", "QA Automation");
    });

    it("should load - Make up an Algorithm Tab Section successfully", () => {
        cy.visit("/");
        cy.get("#algorithm-tab").should("exist").should("contain.text", "Make up an Algorithm").click();
        cy.get("form").should("exist").should("have.length", 3);
        cy.get("#check-number-form").should("exist");
        cy.get("#check-name-form").should("exist");
        cy.get("#check-array-form").should("exist");
        cy.get("#numberInput").should("exist").should("have.attr", "type", "number");
        cy.get("#nameInput").should("exist").should("have.attr", "type", "text");
        cy.get("#arrayInput").should("exist").should("have.attr", "type", "text");
        cy.get("#check-number-btn").should("exist").should("have.attr", "type", "submit");
        cy.get("#check-name-btn").should("exist").should("have.attr", "type", "submit");
        cy.get("#check-array-btn").should("exist").should("have.attr", "type", "submit");
    });

    it("should load - Answer the Questions Tab Section successfully", () => {
        cy.visit("/");
        cy.get("#question-tab").should("exist").should("contain.text", "Answer the Questions").click();
        cy.get('[data-cy="given-sequence"]').should("exist").should("contain.text", "Given bracket sequence:");
        
        cy.get('[data-cy="first-question"]').should("exist").should("contain.text", "1. Can this sequence be considered correct?");
        cy.get('[data-cy="first-answer"]').should("exist").as("firstAnswer");
        cy.get("@firstAnswer").should("contain.text", "Answer: No");
        cy.get("@firstAnswer").should("contain.text", "Mistake 1:");
        cy.get("@firstAnswer").should("contain.text", "Mistake 2:");

        cy.get('[data-cy="second-question"]').should("exist").should("contain.text", "2. If the answer to the previous question is");
        cy.get('[data-cy="second-answer"]').should("exist").as("secondAnswer");
        cy.get("@secondAnswer").should("contain.text", "Solution 1:");
        cy.get("@secondAnswer").should("contain.text", "Solution 2:");
    });
});
