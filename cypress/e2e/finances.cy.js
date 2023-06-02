const { before } = require("../support/before.hooks");

// importar fixtures import user from '../fixtures/user.json'

describe("Transações", () => {
  it("Cadastrar uma entrada", () => {
    cy.Cadastrar_entradas_saidas("Freela", 500, "2023-09-01");
    cy.get("tbody tr td.description").should("have.text", "Freela");
  });

  it("Cadastrar uma saida", () => {
    cy.Cadastrar_entradas_saidas("Cinema", -45, "2023-07-01");
    cy.get("tbody tr td.description").should("have.text", "Cinema");
  });

  it("Excluir transação", () => {
    cy.Cadastrar_entradas_saidas("Freela", 500, "2023-07-01");
    cy.Cadastrar_entradas_saidas("Mesada", 100, "2023-07-01");
    //mostra os elementos irmão do elemento referencia e children pega um filho chamado img
    cy.contains(".description", "Freela").siblings().children("img").click();
    // confere a quantidade de elemento com descrição
    cy.get("tbody tr").should("have.length", 1);
  });
});

// Posso criar function aqui ou criar em commands e chamar para fazer a mesma coisa

// function criarTransacao(descricao, valor, data) {
//   cy.contains("Nova Transação").click();
//   cy.get("#description").type(descricao);
//   cy.get("#amount").type(valor);
//   // input tipo date
//   cy.get("#date").type(data);
//   cy.contains("button", "Salvar").click();
// }
