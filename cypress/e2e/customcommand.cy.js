Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://practicetestautomation.com/practice-test-login/')
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('#submit').first().click()
  })
  describe('Login Test using Custom Command', () => {
    it('should login successfully', () => {
      cy.login('student', 'Password123')
      cy.contains('Logged In Successfully').should('be.visible').screenshot();
    })
  })