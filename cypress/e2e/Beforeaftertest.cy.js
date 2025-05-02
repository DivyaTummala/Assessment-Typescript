describe('Login Functionality', () => {
    
    beforeEach(() => {
        cy.visit('https://practicetestautomation.com/practice-test-login/');
        cy.get('#username').type('student');
        cy.get('#password').type('Password123');
        cy.get('.btn').click();
    });

    it('Checks if Login was Successful', () => {
        cy.get('.post-title').should('contain', 'Logged In Successfully');
    });

    it('Verifies User Dashboard', () => {
        cy.get('a[href="/practice-test"]').should('exist');
    });

    afterEach(() => {
        cy.get('a.wp-block-button__link has-text-color has-background has-very-dark-gray-background-color').click();
        cy.clearCookies();
    });

});