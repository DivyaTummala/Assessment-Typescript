import 'cypress-file-upload';
describe('file upload', () => {

    it('should upload a file', () => {
        cy.visit('https://the-internet.herokuapp.com/upload');
        const filePath = 'cypress/fixtures/sample.txt'; 
        cy.get('#file-upload').attachFile('fileupload.jpg');
        cy.get('#file-submit').click();
    });

});