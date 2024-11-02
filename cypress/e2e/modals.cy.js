describe('handling modal test case', () => {
  it('handle simple modal', () => {
    cy.visit('https://practice-automation.com/modals/')
    cy.get('#simpleModal').click()
    cy.get('.pum-title.popmake-title').should('be.visible')
    cy.get('div.pum-content.popmake-content p').contains('Hi, I’m a simple modal.').should('be.visible')
  })
})