describe('mouse hover test case', () => {
  it('mouse hover testing', () => {
    cy.visit('https://practice-automation.com/hover/')
    cy.get('#mouse_over').trigger('mouseover')
    cy.get('#mouse_over').should('contain','You did it')
  })
})