describe   ('Alert Functionality', () => {
    it('Checks if Alert is Present', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get('button[onclick="jsAlert()"]').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am a JS Alert');
        })
    });
})