
const jsondata = require('../fixtures/Datadriven1.json')
describe('Data Driven Testing', () => {

  jsondata.forEach(searchvalue => {    
    it('Data Driven Testing',{retries:1}, () => {
        cy.visit('https://www.google.co.in/')
        cy.get('#APjFqb').type(searchvalue.search)
         cy.get('.gNO89b').eq(0).click()
         //cy.get('.gNO89b').first().click()
    })
    
  });
 
   
})