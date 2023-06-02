Cypress.Commands.add("Cadastrar_entradas_saidas", (descricao, valor, data) => {
  cy.contains("Nova Transação").click();
  cy.get("#description").type(descricao);
  cy.get("#amount").type(valor);
  // input tipo date
  cy.get("#date").type(data);
  cy.contains("button", "Salvar").click();
});
