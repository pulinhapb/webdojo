describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('h1').click();
    cy.get('h1').should('have.text', 'Kitchen Sink');
    cy.get('h1').should('be.visible');
    cy.get(':nth-child(3) > .container > .row > #utilities > p').should('have.text', 'Commands drive your tests in the browser like a real user would. They let you perform actions like typing, clicking, xhr requests, and can also assert things like "my button should be disabled".');
    /* ==== End Cypress Studio ==== */
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('StudioWebDojo', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000/');
    cy.get('#email').clear('papito@webdojo.com');
    cy.get('#email').type('papito@webdojo.com');
    cy.get('#password').clear('k');
    cy.get('#password').type('katana123');
    cy.get('.bg-\\[\\#8257E5\\]').click();
    cy.get('[data-cy="user-name"]').click();
    cy.get('[data-cy="user-name"]').should('have.text', 'Fernando Papito');
    cy.get('[data-cy="user-name"]').should('have.class', 'text-gray-100');
    cy.get('[data-cy="user-name"]').should('be.visible');
    cy.get(':nth-child(1) > .items-start > .flex-1 > .text-lg').should('be.visible');
    cy.get(':nth-child(2) > .items-start > .w-12').should('be.visible');
    cy.get(':nth-child(3) > .items-start > .flex-1 > .text-lg').should('be.visible');
    cy.get(':nth-child(4) > .items-start > .w-12').should('be.visible');
    cy.get(':nth-child(5) > .items-start > .flex-1 > .text-lg').should('be.visible');
    cy.get(':nth-child(6) > .items-start > .flex-1 > .text-lg').should('be.visible');
    cy.get('.h-8').should('be.visible');
    cy.get('.h-8').should('have.attr', 'alt', 'logo');
    /* ==== End Cypress Studio ==== */
  });
})