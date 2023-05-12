///<reference types="Cypress"/>

describe("Login verification", function () {
  //Hooks
  this.beforeEach(function () {
    cy.login();
  });

  //Positive scenarios
  it("Successfull login", function () {
    cy.url().should("equal", Cypress.config("baseUrl") + "/");
    cy.get(".quote").should("be.visible");
    cy.get(".tag-item").should("be.visible");
  });

  //Positive scenarios
  it("Successfull login1", function () {
    cy.url().should("equal", Cypress.config("baseUrl") + "/");
    cy.get(".quote").should("be.visible");
    cy.get(".tag-item").should("be.visible");
  });

  //Negative scenarios
  // it("Empty login and password fields", () => {
  //   cy.login("{backspace}", "{backspace}");
  //   cy.get(".error")
  //     .should("be.visible")
  //     .and(
  //       "have.text",
  //       "Error while logging in: please, provide your username."
  //     );
  // });
});
