

describe('Formulário de Perfis', () => {

    beforeEach(() => {
        cy.login()
        cy.goTo('Alertas JS', 'JavaScript Alerts')
    })

    it('testando alerts', () => {

        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Olá QA, eu sou um Alert Box!')
        })
        cy.contains('button', 'Mostrar Alert').click()
    })

    //botao de confirmar
    it('Deve confirmar um diálogo POSITIVO', () => {
        cy.on('window:confirm', (msg) => {
            expect(msg).to.equal('Aperte um botão!')
            return true;   //aperta no OK
        })
        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Você clicou em Ok!')          
        })
        cy.contains('button', 'Mostrar Confirm').click()
    })

    ////botao de cancelar
    it('Deve confirmar um diálogo NEGATIVO', () => {
        cy.on('window:confirm', (msg) => {
            expect(msg).to.equal('Aperte um botão!')
            return false;   //aperta no cancelar
        })
        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Você cancelou!')          
        })
        cy.contains('button', 'Mostrar Confirm').click()
    })


    it('Interagir com o prompt no navegador e validar a msg', () => {
            cy.window().then((win) => {
                cy.stub(win, 'prompt').returns('Paula')
            })
            cy.on('window:alert', (msg) => {
                expect(msg).to.equal('Olá Paula! Boas-vindas ao WebDojo!')          
            })
            cy.contains('button', 'Mostrar Prompt').click()

    })

})




