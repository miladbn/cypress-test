/// <reference types="cypress" />

describe("Basic Test", function () {
  it("test for text in small devices", () => {
    cy.visit("https://www.iconfinder.com/user/login");

    cy.viewport("iphone-se2");
    cy.contains("h5", "Sign in to Iconfinder").should("be.visible");

    cy.contains("a", "Lost your password?").should("be.visible");
    cy.contains("button", "Sign in").should("be.visible");
    cy.contains("label", "E-mail or username").should("be.visible");
    cy.contains("label", "Password").should("be.visible");
    cy.contains("a", "Sign up now").should("be.visible");
    cy.contains("Not a member?").should("be.visible");

    cy.get("div.d-none.d-lg-block.col-lg-5.col-xl-4.h-100").should(
      "not.be.visible"
    );
  });
  it("test for text in tablet devices", () => {
    cy.visit("https://www.iconfinder.com/user/login");

    cy.viewport("ipad-2");
    cy.contains("h5", "Sign in to Iconfinder").should("be.visible");

    cy.contains("a", "Lost your password?").should("be.visible");
    cy.contains("button", "Sign in").should("be.visible");
    cy.contains("label", "E-mail or username").should("be.visible");
    cy.contains("label", "Password").should("be.visible");
    cy.contains("a", "Sign up now").should("be.visible");
    cy.contains("Not a member?").should("be.visible");

    cy.get("div.d-none.d-lg-block.col-lg-5.col-xl-4.h-100").should(
      "not.be.visible"
    );
  });
  it("test for text in large devices", () => {
    cy.visit("https://www.iconfinder.com/user/login");

    cy.viewport("macbook-16");
    cy.contains("h5", "Sign in to Iconfinder").should("be.visible");

    cy.contains("a", "Lost your password?").should("be.visible");
    cy.contains("button", "Sign in").should("be.visible");
    cy.contains("label", "E-mail or username").should("be.visible");
    cy.contains("label", "Password").should("be.visible");
    cy.contains("a", "Sign up now").should("be.visible");
    cy.contains("Not a member?").should("be.visible");

    cy.get("div.d-none.d-lg-block.col-lg-5.col-xl-4.h-100").should(
      "be.visible"
    );
  });
  it("test for links in page", () => {
    cy.visit("https://www.iconfinder.com/user/login");

    cy.contains("a", "Lost your password?").click();
    cy.url().should("include", "/password-reset");
    cy.go("back");
    cy.contains("a", "Sign up now").click();
    cy.url().should("include", "/signup");
    cy.go("back");
    cy.contains("a", "Ingredients of a Good Life' by Iconfinder").click();
    cy.url().should("include", "/ingredients-of-a-good-life");
    cy.go("back");
  });
  it("login form work test", () => {
    cy.visit("https://www.iconfinder.com/user/login");

    cy.get("input[name=username]").type("test");
    cy.get("button[type=submit]").click();
    cy.contains("Please enter your password").should("be.visible");

    cy.get("input[name=password]").type("test");
    cy.get("button[type=submit]").click();
  });
});
