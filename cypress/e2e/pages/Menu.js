
class Menupage {

    element = {

      Menuclick:()=>
      cy.get('#menu-item-43')
      
    }

    GoToMenu()
    {
        this.element.Menuclick().click(); 
    }

}
module.exports = new Menupage()