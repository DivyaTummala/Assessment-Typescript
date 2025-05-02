import Homepage from "../e2e/pages/Homepage"
import FindTitle from "./pages/FindTitle"
import Menu from "./pages/Menu"

describe('Page Object Model', () => {
    it('should login successfully', () => {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
       

        // Open youtype
        Homepage.LaunchApplication()
        // search in youtube
        Homepage.Typeusernamepwd()

        Homepage.LoginButton()

        FindTitle.element.titletext()

        Menu.GoToMenu()

        // Menu.element.GoToMenu()

            // // open playlist
        // Resultpage.goToPlaylist()
        // // validating the playlist title
        // PlaylistPage.element.playlisttitle().should('contain', 'Cypress E2E')
    })

})