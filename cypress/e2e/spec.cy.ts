/// <reference types="cypress" />
describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.get("#projectName").type("Hello World2");
    cy.get("main > :nth-child(2) > button").click();
  });
});
