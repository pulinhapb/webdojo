describe('testar mouse over', () => {
    it('testar mouse over', () => {
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')

        cy.get('[data-cy="download"]').click()    //aqui vai clicar no link "Download"

        //vai no terminal e instala o pdf-parse. fazendo  : npm install add pdf-parse

        cy.task('readPdf','cypress/download/recibo.pdf')
        .should('contain','Papito Shop')

    })


})