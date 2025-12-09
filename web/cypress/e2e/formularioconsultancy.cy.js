
describe('Formulário de Consultoria', () => {

  beforeEach(() => {
    cy.login()
    cy.goTo('Formulários', 'Consultoria')

  })

  it('Consultoria INDIVIDUAL  ', () => {
      const   FORMULARIO = {         ///const NÃO muda , se quiser mudar tem que alterar para var
        nome:'PAULA ONOFRE',
        email: 'PAULA@teste.com.br',
        phone: '11 99999-8888',
        consultandyType: 'Individual',
        personType:'cpf',
        document: '05560984477',
        discoveryChannels : [
          'Instagram',
          'LinkedIn',
          'Udemy',
          'Youtube',
          'Indicação de Amigo',
        ],
        file: './cypress/fixtures/document.pdf',
        description: 'Aqui é o meu textãaaaao',
        techs : [
          'Cypress',
          'Robot Framework',
          'Playwright',
        ],
        terms : true
      }

    cy.get('#name').type(FORMULARIO.nome)

    //email com campo de placeholder e não ID
    cy.get('input[placeholder="Digite seu email"]').type('paulakkk@webdojocom.br')

    //Campo telefone com mácara
    cy.get('input[placeholder="(00) 00000-0000"]')
      .type('83 99940-1626')
      .should('have.value', '(83) 99940-1626')


    //SELECT    combo   combobox faz : 
    cy.get('#consultancyType').select('In Company')     // neste campo select pode passar  o conteúdo do label,value
    // ou 
    //cy.contains('label','Tipo de Consultoria')
    //   .parent()    //vai para tag PAI
    //   .find('select')   //procura pelo tipo select
    //   .select('In Company')   //seleciona o texto x


    //radio   botão de radio
    cy.contains('span', 'Pessoa Física')
      .parent()    //vai para tag PAI
      .find('input')   //procura pelo tipo select
      .click()   //seleciona o texto x
      .should('be.checked')
    //   .check()        //pode usar tbm o check() no radiobutton


    //        e pessoa juridica tem que esta desmarcado , então faz : 
    cy.contains('span', 'Pessoa Jurídica')
      .parent()    //vai para tag PAI
      .find('input')   //procura pelo tipo select
      .should('be.not.checked')



    //cpf

    cy.contains('label', 'CPF')
      .parent()    //vai para tag PAI
      .find('input')
      .type('05560984477')
      .should('have.value', '055.609.844-77')


    //checkbox
    cy.contains('label', 'Instagram')
      .parent()    //vai para tag PAI
      .find('input')   //ou find('input[type=checkbox]')
      .check()   //seleciona o texto x
      .should('be.checked')

    //SE tiver uma lista de itens , pode fazer um array e depois um forEach , assim  : 
    /*
       const discoveryChannels = [
         'Instagram',
         'LinkedIn',
         'Udemy',
         'Youtube',
         'Indicação de Amigo',
       ]
   
       discoveryChannels.forEach((lista) => {
         cy.contains('label', lista)
         //  .parent()    //vai para tag PAI
           .find('input')   //ou find('input[type=checkbox]')
           .check()   //seleciona o texto x
           .should('be.checked')
   
   
       })
       */

    //Anexar arquivo
    /*
    cy.get('input[type="file"]')
      .selectFile('./cypress/fixtures/document.pdf', { force: true })


    ///campo textarea
    cy.get('textarea[placeholder="Descreva mais detalhes sobre sua necessidade"]')
      .type('Aqui é o meu textãaaaao : ass Paula Onofre')

    // campo para ir adicionando
    cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
      .type('Pessoa')
      .type('{enter}')

    cy.contains('label', 'Tecnologias')
      .parent()
      .contains('span', 'Pessoa')
      .should('be.visible')
       */

    //ou também pode fazer através de uma lista
    const techs = [
      'Cypress',
      'Robot Framework',
      'Playwright',

    ]

    techs.forEach((lista) => {
      cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
        .type(lista)
        .type('{enter}')

      cy.contains('label', 'Tecnologias')
        .parent()
        .contains('span', lista)
        .should('be.visible')
    })

    cy.contains('label', 'termos de uso')
      .find('input')
      .check()

    cy.contains('button', 'Enviar formulário').click()

    // cy.contains('Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.')
   
   //ou
   
   //cy.get('.modal', { timeout: 10000 })
   //   .should('be.visible')
    //  .find('modal-content')
    //  .should('be.visible')
    //  .and('have.text', 'Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.')




  })

  it('Validar campos obrigatórios', () => {

    cy.contains('button', 'Enviar formulário').click()
    cy.contains('label', 'Nome Completo *')
      .parent()
      .find('p')
      .should('be.visible')
      .should('have.text', 'Campo obrigatório')
      .and('have.class', 'text-red-400')
      .and('have.css', 'color', 'rgb(248, 113, 113)')

    cy.contains('label', 'Email *')
      .parent()
      .find('p')
      .should('be.visible')
      .should('have.text', 'Campo obrigatório')
      .and('have.class', 'text-red-400')
      .and('have.css', 'color', 'rgb(248, 113, 113)')
    })

    it('Validar campos obrigatórioscom o FOR', () => {
    cy.contains('button', 'Enviar formulário').click()
    const   campoObrigatorios = [
      {label: 'Nome Completo', message: 'Campo obrigatório' },
      {label: 'Email', message: 'Campo obrigatório' },
      {label: 'termos de uso', message: 'Você precisa aceitar os termos de uso' }
    ]

    campoObrigatorios.forEach(({label, message}) =>{
      cy.contains('label', label)
      .parent()
      .find('p')
      .should('be.visible')
      .should('have.text', message)
      .and('have.class', 'text-red-400')
      .and('have.css', 'color', 'rgb(248, 113, 113)')
    })
  })

  afterEach(()=>{
    cy.log('Isso acontece depois de cada teste')
  })
})