describe('testar iframe', () => {
    it('testar iframe', () => {
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')
        cy.contains('Video').click()


        cy.wait(3000)

        cy.get('iframe[title="Video Player"]')
            .should('exist')
            //its   serve para validar : propriedades de elementos, prodiedade das janenas, cookies, iframe
            .its('0.contentDocument.body')  //pegar o conteúdo
            .then(cy.wrap) /// recurso para transformar  o valor em  um objeto cypress , array na página html
            .as('objeto')  //grava aqui o objeto .aqui dar o nome que quizer

        cy.get('@objeto')
            .find('.play-button')
            .click()

        cy.get('@objeto')
            .find('.pause-button')
            .should('be.visible')



    })
})
