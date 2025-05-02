
class FindTitlePage {

    element = {

      titletext:()=>
      cy.contains('Logged In Successfully').should('be.visible')
      
    }

}
module.exports = new FindTitlePage()