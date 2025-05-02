import 'cypress-xpath';
/// <reference types="cypress" />

describe('Checkbox & Radio Button &dropdown Selection', () => {
    it('Selects a Checkbox', () => {
        cy.visit('https://example.cypress.io/commands/actions');
        cy.get('label >input').first().check()
    })
    it('Selects a Radio Button', () => {
        cy.visit('https://example.cypress.io/commands/actions');
        cy.get('#optionsRadios1').check()

 })
 describe('dropdown Selection', () => {
    it('Selects a dropdown value', () => {
        cy.visit('https://example.cypress.io/commands/actions')
        cy.get('.action-select').select('fr-bananas'); 
    })
   
})
})