
Given(/^visito o site do detran$/, () => {
	cy.visit("https://www.detran.mg.gov.br/veiculos/transferencias/transferencia-de-propriedade-de-veiculo");
});


When(/^informo que o endereço de Correspondência é igual ao Residencial$/, () => {
	cy.get("#endereco-igual-residencia").select("Sim");
});

Then(/^não aparecem os campos para preencher o endereço$/, () => {
    
    cy.get("#CorrespondenciaCep").should("not.be.visible");
    cy.get("#CorrespondenciaEndereco").should("not.be.visible");
    cy.get("#CorrespondenciaNumero").should("not.be.visible");
    cy.get("#CorrespondenciaComplemento").should("not.be.visible");
    cy.get("#CorrespondenciaBairro").should("not.be.visible");
    
});


Given(/^visito o site do detran mg$/, () => {
	cy.visit("https://www.detran.mg.gov.br/veiculos/transferencias/transferencia-de-propriedade-de-veiculo");
});


When(/^informo que o endereço de Correspondência não é igual ao Residencial$/, () => {
	cy.get("#endereco-igual-residencia").select("Não");
});

Then(/^aparecem os campos para preencher o endereço$/, () => {
        cy.get("#CorrespondenciaCep").should("be.visible");
        cy.get("#CorrespondenciaEndereco").should("be.visible");
        cy.get("#CorrespondenciaNumero").should("be.visible");
        cy.get("#CorrespondenciaComplemento").should("be.visible");
        cy.get("#CorrespondenciaBairro").should("be.visible");
});

