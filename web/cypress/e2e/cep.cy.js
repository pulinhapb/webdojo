import endereco from '../fixtures/cep.json'


describe('Formulário de CEP', () => {

    beforeEach(() => {
        cy.login()      /// ou  cy.login(true)        faz por interface e nao por cookie
        cy.goTo('Integração', 'Consulta de CEP')
    })

    it('testando cep', () => {
        cy.get('#cep').type(endereco.cep)
        cy.contains('button', 'Buscar').click()
        cy.get('#street')
            .should('have.value', endereco.rua)
    })

})