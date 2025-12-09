
describe('testar mouse over', () => {
    it('testar mouse over', () => {
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')
        cy.contains('Kanban').click()

        const dataTransfer = new DataTransfer()    //recurso transfere html para outro elemento/bloco html

        cy.contains('div[draggable=true]', 'Documentar API')
            .trigger('dragstart', { dataTransfer })   //clica e arrasta

        cy.get('.column-done')
            .trigger('drop', { dataTransfer })    //aqui solta na coluna direita que é column-done
            .find('h3')
            .should('have.text','Done (4)')   //valide se tem agora 4 elementos

            cy.get('.column-done')
            .should('include.text','Documentar API')
            .and('include.text','Criar documentação da API com Swagger')


    })
})