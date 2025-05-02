import 'cypress-iframe'
describe('Iframe', () => {

    it('Iframe', () => {
        // cy.visit('https://qavbox.github.io/demo/iframes/')
        // cy.get('#Frame2').its('0.contentDocument.body').find('#frameinput').type('Hello')
        cy.visit('https://practice.expandtesting.com/iframe')
        cy.iframe('#email-subscribe').its('0.contentDocument.body').find('#email').type('Hello')


        })
       
})
