//const { expect } = require("chai");
import {getDataHoje} from "../support/utils"

describe('Login', () => {


  //beforeEach (() => {
   // cy.viewport('iphone-xr')        //vai executar no tamanho do iphone XR
  //})
 
  it('Login com sucesso', () => {
    cy.start()   
    cy.submitLoginForm('papito@webdojo.com', 'katana123')
    cy.get('[data-cy="user-name"]')
      .should('be.visible')
      .and('have.text', 'Fernando Papito')

    cy.getCookie('login_date').should('exist')
    cy.getCookie('login_date').should((cookie) => {
      expect(cookie.value).to.eq(getDataHoje())
    })
    cy.window().then((win) => {
      const token = win.localStorage.getItem('token')
      // expect(token).to.exist
      expect(token).to.match(/^[a-fA-F0-9]{32}$/)               // se for token fixo faz assim  : eq('e1033d63a53fe66c0fd3451c7fd8f617')
    })
  })
  //   cy.get('#email')
  //  cy.get('#email').type('papito@webdojo.com')
  //   cy.get('#password').type('katana123')
  //    cy.contains('button', 'Entrar').click()

  it('Login inválido', () => {
    cy.start()
    cy.submitLoginForm('papitoooo@webdojo.com', 'katana123')
    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')

  })
})