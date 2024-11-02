describe('using commands spec file', () => {
  it('commands example', () => {
    cy.visit('https://practice-automation.com/form-fields/')
    cy.getByID('#feedbackForm').should('be.visible')
    cy.get('#name-input').type("abhi")
  })
})  