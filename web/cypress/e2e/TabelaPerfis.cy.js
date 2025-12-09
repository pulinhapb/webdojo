

describe('Formulário de Perfis', () => {

  beforeEach(() => {
    cy.login()
    cy.goTo('Tabela', 'Perfis do GitHub')
  })

  it('Deve poder cadastrar um novo perfil do github', () => {
    cy.get('#name').type('Paula Onofre')
    cy.get('#username').type('pulinhapb_QA')
    cy.get('#profile').type('QA')
    cy.contains('button', 'Adicionar Perfil').click()

    cy.get('#name').type('Paula Onofre')
    cy.get('#username').type('pulinhapb_DEV')
    cy.get('#profile').type('QA')
    cy.contains('button', 'Adicionar Perfil').click()


    //verificar se na MESMA LINHA X possui pulinhapb_DEV e se está visível
    cy.contains('table tbody tr', 'pulinhapb_DEV')
      .should('be.visible')
        .contains('Paula Onofre')
        .should('be.visible')

    // cy.contains('table tbody tr', 'Paula Onofre').should('be.visible')
    // cy.contains('table tbody tr', 'pulinhapb_DEV').should('be.visible')
    // cy.contains('table tbody tr', 'QA').should('be.visible')

    //ou pode fazer tbm da seguite forma :
    cy.contains('table tbody tr', 'pulinhapb_DEV')
      .should('be.visible')
      .as('perfil')  //alias


    cy.get('@perfil')  //usa o alias
    .contains('td','Paula Onofre')  //verifique se contem esse 3exto no td
    .should('be.visible') //e se está visível







  })
  it('REMOVER perfil existente', () => {

    //criar uma massa de teste
    const MASSA = {
      nome: 'Paula Onofre',
      user: 'pulinhapb123',
      perfil: 'QA'
    }

    //vamos adicionar primeiro 
    cy.get('#name').type(MASSA.nome)
    cy.get('#username').type(MASSA.user)
    cy.get('#profile').type(MASSA.perfil)
    cy.contains('button', 'Adicionar Perfil').click()


    cy.contains('table tbody tr', MASSA.user)
    .should('be.visible')
    .as('perfil')  //alias

      //se esta visivel, agr procure o buttao remover e clique
    cy.get('@perfil').find('button[title="Remover perfil"]').click()
    cy.contains('table tdoby',MASSA.user)
    .should('not.exist')

  })
  it('Clicar no LINK perfil existente', () => {

    //criar uma massa de teste
    const MASSA = {
      nome: 'Paula Onofre',
      user: 'pulinhapb',
      perfil: 'QA'
    }

    //vamos adicionar primeiro 
    cy.get('#name').type(MASSA.nome)
    cy.get('#username').type(MASSA.user)
    cy.get('#profile').type(MASSA.perfil)
    cy.contains('button', 'Adicionar Perfil').click()


    cy.contains('table tbody tr', MASSA.user)
    .should('be.visible')
    .as('perfil')  //alias

      //cypress nao consegue validar multiplas janelas / varias abas
   // cy.get('@perfil').find('a[href="https://github.com/pulinhapb"]').click()
   //ou pode fazer validacao de atributo :
   cy.get('@perfil').find('a')
   .should('have.attr','href','https://github.com/' + MASSA.user)
   .and('have.attr','target','_blank')  //valida se foi para outra aba do navegador



  })
})


