describe('Mouse Event Functionality', () => {
    it('Click onblur', () => {
        cy.visit('https://testpages.eviltester.com/styled/events/javascript-events.html'); 
        cy.get('button#onblur').click().should('be.visible').trigger('click');
        cy.get('#onmouseover').should('be.visible').trigger('mouseover');
     
      });
      
})