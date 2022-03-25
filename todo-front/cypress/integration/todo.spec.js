describe("Register", () => {
  it("Register User", () => {
    cy.visit("http://localhost:3000");
    cy.get("a").click();
    cy.get("#name").type("Jesus");
    cy.get("#lastName").type("Moreno");
    cy.get("#email").type("jesusmanuelmorenomantilla@gmail.com");
    cy.get("#password").type("1234");
    cy.get("button").click();
    cy.reload();
  });
});
describe("Todo Flow", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#email").type("jesusmanuelmorenomantilla@gmail.com");
    cy.get("#password").type("1234");
    cy.get("button").click();
    cy.get("h1").contains("TODOS");
  });
  it("Create todos", () => {
    cy.get("div#todo-list > div").should("have.length", 0);
    cy.get("#description").type("My task one");
    cy.get("#status").select("PENDING");
    cy.get("#date").type("2023-12-12");
    cy.get("#accept").type("click");
    cy.get("#todo-list > div").should("have.length", 1);
    cy.get("#description").type("My task two");
    cy.get("#status").select("PENDING");
    cy.get("#date").type("2023-12-12");
    cy.get("#accept").type("click");
    cy.get("#todo-list > div").should("have.length", 2);
  });
  it("Update One Todo", () => {
    cy.get("div#todo-list > div#todo-0").should("have.length", 1);
    cy.get("div#todo-list > div#todo-0 button#edit-0").click();
    cy.get("#description").type("EDITED");
    cy.get("#accept").type("click");
    cy.get("div#todo-list > div#todo-0").contains(/EDITED/);

    cy.get("#todo-list > div").should("have.length", 2);
  });
  it("Delete TODOS", () => {
    cy.get("button#delete-0").click();
    cy.get("#todo-list > div").should("have.length", 1);
    cy.get("button#delete-0").click();
    cy.get("#todo-list > div").should("have.length", 0);
  });
  it("Create other todo", () => {
    cy.get("div#todo-list > div").should("have.length", 0);
    cy.get("#description").type("My task one");
    cy.get("#status").select("PENDING");
    cy.get("#date").type("2023-12-12");
    cy.get("#accept").type("click");
    cy.get("#todo-list > div").should("have.length", 1);
  });
  it("Delete todo", () => {
    cy.get("button#delete-0").click();
    cy.get("#todo-list > div").should("have.length", 1);
  });
  it("Logout", () => {
    cy.get("button#logout").click();
    cy.get("#email");
  });
});
