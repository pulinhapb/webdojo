
describe('testar links em nova aba', () => {
    it('testar links em nova aba', () => {
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')


        cy.get('[data-cy="instagram-link"]')
            .should('have.attr', 'href', 'https://www.instagram.com/qapapito')
            .and('have.attr', 'target', '_blank')
    })

    it('testar links em nova aba e validar a nova ABA', () => {
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')
        cy.contains('Formulários').click()
        cy.contains('a','termos de uso')
        .invoke('removeAttr','target')   //
        .click()

        cy.contains('Aceitação dos Termos')
        .should('be.visible')
    })
})