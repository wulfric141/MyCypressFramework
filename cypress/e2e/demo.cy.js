/// <reference types="Cypress" />
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.com')
    cy.url().should('contain','example.com')
    cy.url().should('contain','example.coom')
  })
})