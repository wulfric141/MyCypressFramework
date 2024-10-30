/// <reference types="Cypress" />
describe('My Test Scenarios', () => {
  beforeEach(()=>{
    cy.visit('https://example.com')
  })
  it('Test case 1', () => {
    cy.url().should('contain','example.com')
    
  })

  it('My Second test case - assert title', () => {
    cy.title().should('contain','Example Domain')
  })
  // run only this test case
  // it.only('My 3rd test case - assert element', () => {
  //   cy.get('h1').should('be.visible')
  // })

  // bug id #124
  it.skip('My 4th test case - reload and logs', () => { 
    cy.log('before load')
    cy.reload()
    cy.log('after reload')
  })
})