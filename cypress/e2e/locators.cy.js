import 'cypress-xpath';
/// <reference types="cypress" />

describe('Locators', () => {
    it('CSS Locator', () => {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('#username').type('student')
        cy.get('#password').type('Password123')
        cy.get('.btn').click()
        cy.get('.post-title').should('contain', 'Logged In Successfully');
        
    })
    it('XPath Locator', () => {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        
        cy.xpath('//input[@id="username"]').type('student');
        cy.xpath('//input[@id="password"]').type('Password123');
        cy.xpath('//button[@class="btn"]').click();
        cy.get('.post-title').then(($title) => {
            expect($title.text()).to.equal('Logged In Successfully');
            

    })
})
})