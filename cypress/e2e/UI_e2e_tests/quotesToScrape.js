///<reference types="Cypress"/>

describe("", () => {
  //Hooks
  before(function () {
    cy.fixture("quotesData.json").then((data) => {
      this.quotesData = data;
    });
  });

  it("UI scrolling verification", function () {
    cy.visit("/" + "/scroll");
    cy.get(".quote").should("be.visible");
    cy.verifyQuote(this.quotesData[0].author, this.quotesData[0].quote);
  });

  it("UI loading verification", () => {
    cy.visit("/" + "js-delayed/");
    cy.get(".quote").should("be.visible").and("have.length", 10);
  });

  it("UI elements verification", () => {
    cy.visit("/");
    cy.xpath("//div[@class='quote']").should("have.length", 10);
    cy.xpath("//span[@class='tag-item']").should("have.length", 10);
    cy.xpath("//a[text()='Next ']").should("be.visible").click();
    cy.url().should("equal", Cypress.config("baseUrl") + "/page/2/");
    cy.xpath("//a[text()=' Previous']").should("be.visible").click();
    cy.url().should("equal", Cypress.config("baseUrl") + "/page/1/");
  });

  it("Qoutes filtering by tags verification", () => {
    cy.visit("/");
    cy.filterByTags("truth");
  });

  it("About author page verification", function () {
    cy.visit("/");
    cy.openAboutAuthorPage("Albert Einstein");
  });
});
