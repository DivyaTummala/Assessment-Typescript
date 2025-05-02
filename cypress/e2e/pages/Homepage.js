class HomePage{

    element = {

        UserName:() => cy.get('#username'),
        Password:() => cy.get('#password'), 
        LoginButton: () => cy.get('#submit')
    }

    LaunchApplication()
    {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
    }

    Typeusernamepwd()
    {
        this.element.UserName().type('student')
        this.element.Password().type('Password123')
    }
    LoginButton()
    {
        this.element.LoginButton().click(); 
    }

}
module.exports = new HomePage()