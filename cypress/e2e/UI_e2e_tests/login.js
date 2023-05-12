///<reference types="Cypress"/>

describe("Login verification", function () {
  //Hooks
  beforeEach(function () {
    cy.fixture("loginData.json").as("loginData");

    //Session implementation
    cy.get("@loginData").then((loginData) => {
      cy.session(`User_${loginData.login}`, () => {
        cy.visit("/" + "login");
        cy.login(loginData.login, loginData.password);
      });
    });
    cy.visit("/");
    cy.xpath("//a[contains(text(), 'Logout')]").should("be.visible");
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
