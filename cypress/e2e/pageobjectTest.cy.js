import Homepage from "../e2e/pages/Homepage"
import FindTitle from "./pages/FindTitle"
import Menu from "./pages/Menu"

describe('Page Object Model', () => {
    it('should login successfully', () => {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
       

        Homepage.LaunchApplication()
        Homepage.Typeusernamepwd()

        Homepage.LoginButton()

        FindTitle.element.titletext()

        Menu.GoToMenu()

    })

})