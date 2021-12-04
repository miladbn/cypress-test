/// <reference types="cypress" />

describe("Basic Test", function () {
  it("test for text in small devices", () => {
    cy.visit("https://www.iconfinder.com/user/signup");

    cy.viewport("iphone-se2");
    cy.contains("h5", "Sign up to Iconfinder").should("be.visible");
    cy.contains(
      "small",
      "Please create a strong password and with at least 8 characters."
    ).should("be.visible");
    cy.contains("a", "Sign in instead").should("be.visible");
    cy.contains("button", "Sign up").should("be.visible");
    cy.contains("label", "First name").should("be.visible");
    cy.contains("label", "Last name").should("be.visible");
    cy.contains("label", "Password").should("be.visible");
    cy.contains("label", "E-mail").should("be.visible");
    cy.get("div.d-none.d-lg-block.col-lg-5.col-xl-4.h-100").should(
      "not.be.visible"
    );
  });
  it("test for text in tablet devices", () => {
    cy.visit("https://www.iconfinder.com/user/signup");

    cy.viewport("ipad-2");
    cy.contains("h5", "Sign up to Iconfinder").should("be.visible");
    cy.contains(
      "small",
      "Please create a strong password and with at least 8 characters."
    ).should("be.visible");
    cy.contains("a", "Sign in instead").should("be.visible");
    cy.contains("button", "Sign up").should("be.visible");
    cy.contains("label", "First name").should("be.visible");
    cy.contains("label", "Last name").should("be.visible");
    cy.contains("label", "Password").should("be.visible");
    cy.contains("label", "E-mail").should("be.visible");
    cy.get("div.d-none.d-lg-block.col-lg-5.col-xl-4.h-100").should(
      "not.be.visible"
    );
  });
  it("test for text in large devices", () => {
    cy.visit("https://www.iconfinder.com/user/signup");

    cy.viewport("macbook-16");
    cy.contains("h5", "Sign up to Iconfinder").should("be.visible");
    cy.contains(
      "small",
      "Please create a strong password and with at least 8 characters."
    ).should("be.visible");
    cy.contains("a", "Sign in instead").should("be.visible");
    cy.contains("button", "Sign up").should("be.visible");
    cy.contains("label", "First name").should("be.visible");
    cy.contains("label", "Last name").should("be.visible");
    cy.contains("label", "Password").should("be.visible");
    cy.contains("label", "E-mail").should("be.visible");
    cy.get("div.d-none.d-lg-block.col-lg-5.col-xl-4.h-100").should(
      "be.visible"
    );
  });
  it("test for links in page", () => {
    cy.visit("https://www.iconfinder.com/user/signup");

    cy.contains("a", "Sign in instead").click();
    cy.url().should("include", "/login");
    cy.go("back");
    cy.contains("a", "Ingredients of a Good Life' by Iconfinder").click();
    cy.url().should("include", "/ingredients-of-a-good-life");
    cy.go("back");
  });
  it("sginup form work test", () => {
    cy.visit("https://www.iconfinder.com/user/signup");

    cy.get("input[name=first_name]").type("test");
    cy.get("button[type=submit]").click();
    cy.contains("Please enter last name").should("be.visible");
    cy.contains("Please enter valid e-mail address").should("be.visible");
    cy.contains("Please enter valid password.").should("be.visible");
    cy.contains("Please accept the terms of service and privacy policy").should(
      "be.visible"
    );

    cy.get("input[name=last_name]").type("test");
    cy.get("button[type=submit]").click();
    cy.contains("Please enter last name").should("not.be.visible");
    cy.contains("Please enter valid e-mail address").should("be.visible");
    cy.contains("Please enter valid password.").should("be.visible");
    cy.contains("Please accept the terms of service and privacy policy").should(
      "be.visible"
    );

    cy.get("input[name=email]").type("test@test.com");
    cy.get("button[type=submit]").click();
    cy.contains("Please enter last name").should("not.be.visible");
    cy.contains("Please enter valid e-mail address").should("not.be.visible");
    cy.contains("Please enter valid password.").should("be.visible");
    cy.contains("Please accept the terms of service and privacy policy").should(
      "be.visible"
    );

    cy.get("input[name=password]").type("testtest123456");
    cy.get("button[type=submit]").click();
    cy.contains("Please enter last name").should("not.be.visible");
    cy.contains("Please enter valid e-mail address").should("not.be.visible");
    cy.contains("Please enter valid password.").should("not.be.visible");
    cy.contains("Please accept the terms of service and privacy policy").should(
      "be.visible"
    );

    cy.get("input[name=has_accepted_terms]").click();
    cy.get("button[type=submit]").click();
    cy.contains("Please enter last name").should("not.be.visible");
    cy.contains("Please enter valid e-mail address").should("not.be.visible");
    cy.contains("Please enter valid password.").should("not.be.visible");
    cy.contains("Please accept the terms of service and privacy policy").should(
      "not.be.visible"
    );
    cy.get("input[name=is_newsletter_subscriber]").click();
    cy.get("button[type=submit]").click();
    cy.contains("E-mail address is already in use").should("be.visible");
  });
});
