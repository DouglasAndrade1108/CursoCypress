describe("Propriedade de produtos", () => {
    beforeEach(() => cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"))
    it("Campo Codigo TUSS", () => {});

it("Preencher campos de texto", () => {
    cy.wait(1000)
    cy.get("#first-name").type("Teste");

    });

it("Preencher campos de select", () => {
    
    cy.get("#ticket-quantity").select("2");
    
    });
});