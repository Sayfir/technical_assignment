// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//

Cypress.Commands.add("login", (login, password) => {
  cy.get("#username").type(login);
  cy.get("#password").type(password);
  cy.get("[type=submit]").click();
});

Cypress.Commands.add("verifyQuote", (author, quote) => {
  cy.scrollTo("bottom");
  cy.xpath(
    `//small[contains(text(), '${author}')]//ancestor::div[@class='quote']`
  )
    .first()
    .scrollIntoView();
  cy.xpath(`//div/span[text()='${quote}']`).should("be.visible");
});

Cypress.Commands.add("filterByTags", (tag) => {
  cy.xpath(`//span[@class='tag-item']/a[text()='${tag}']`).click();
  cy.xpath(`//h3[text()='Viewing tag: ']/a[text()='${tag}']`).should(
    "be.visible"
  );
});

Cypress.Commands.add("openAboutAuthorPage", (author) => {
  cy.xpath(`//small[contains(text(), '${author}')]/following-sibling::a`)
    .first()
    .click();
  let modifiedAuthor = String(author).replace(" ", "-");
  cy.url().should(
    "equal",
    Cypress.config("baseUrl") + `/author/${modifiedAuthor}/`
  );
  cy.xpath(`//h3[contains(text(), '${author}')]`).should("be.visible");
});
