/// <reference types="Cypress" />
describe('My Test Scenarios', () => {
  it('Test case 1', () => {
    cy.visit('https://example.com')
    cy.url().should('contain','example.com')
    
  })

  it('My Second test case - assert title', () => {
    cy.visit('https://example.com')
    cy.title().should('contain','Example Domain')
  })

  it('My 3rd test case - assert element', () => {
    cy.visit('https://example.com')  
    cy.get('h1').should('be.visible')
  })

  it('My 4th test case - reload and logs', () => {
    cy.visit('https://example.com')  
    cy.log('before load')
    cy.reload()
    cy.log('after reload')
  })
})