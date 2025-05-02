describe('Assertions', () => {

    beforeEach(() => {
      cy.visit('https://www.google.com/');
    });
  
    it('Explicit assertions', () => {
      cy.get('a[aria-label="Sign in"]').then((element) => {
        expect(element).to.be.visible;
      });
    });
  
    it('Implicit assertions', () => {
      cy.get('a[aria-label="Sign in"]').should('be.visible');
    });
  
  });