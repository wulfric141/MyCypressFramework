describe('screenshot capture', () => {
  it('capture test case screenshot', () => {
    cy.visit('https://example.com')
    cy.url().should('contain','example.com')
    cy.screenshot({overwrite:true})
    cy.get('h1').screenshot({overwrite:true})
  })
})