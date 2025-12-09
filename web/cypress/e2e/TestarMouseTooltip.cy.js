
describe('testar mouse over', () => {
    it('testar mouse over', () => {
      cy.start()
      cy.submitLoginForm('papito@webdojo.com', 'katana123')

   // testar o tooltipo / mouseover
   cy.contains('Isso é Mouseover!').should('not.exist')
   cy.get('[data-cy="instagram-link"]').realHover()
   cy.contains('Isso é Mouseover!').should('exist')

    })
})