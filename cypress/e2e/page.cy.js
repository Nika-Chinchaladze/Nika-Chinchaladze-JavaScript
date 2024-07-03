/// <reference types="Cypress" />

describe("Page is loaded", () => {
    it("should load - Make up an Algorithm Tab Section successfully", () => {
        cy.visit("/");
        cy.get("#andersen-logo").should("exist");
        cy.get("h2").should("exist").should("have.text", "Technical task for the traineeship candidates");
        cy.get("h3").should("exist").should("have.text", "QA Automation");
    });
});
