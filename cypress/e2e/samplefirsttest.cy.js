describe('My First Test Suite', () => {
    it('My First Test Case', () => {
     
        cy.visit('https://www.google.com/')
        cy.get('#APjFqb').type('Cypress Testing')
        cy.get('#gNO89b').click();

        
})
})