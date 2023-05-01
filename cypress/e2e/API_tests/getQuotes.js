///<reference types="Cypress"/>

describe("GET Quotes request verification", function () {
  //Hooks
  beforeEach(function () {
    cy.request("/" + "/api/quotes", {}).as("quotes");
    cy.fixture("quotesData.json").then((data) => {
      this.quotesData = data;
    });
  });

  it.only("Status 200", function () {
    cy.get("@quotes").then((res) => {
      expect(res.status).to.eq(200);
    });
  });

  it.only("Quotes author data verification", function () {
    cy.get("@quotes").then((res) => {
      let body = res.body;
      expect(body.quotes).has.length(10);
      expect(body.quotes[2].author.name).to.eq(this.quotesData[1].author);
      expect(body.quotes[2].text).to.eq(this.quotesData[1].quote);
    });
  });

  it.only("Quotes tags data verification", function () {
    cy.get("@quotes").then((res) => {
      let body = res.body;
      expect(body.top_ten_tags).has.length(10);
      expect(body.quotes[2].tags).to.contain(this.quotesData[1].tag);
    });
  });
});
