/// <reference types="Cypress" />

describe('forms button and checkboxes', () => {
  it('submit and assert form', () => {
    const name = 'Abhishek'
    cy.visit('https://practice-automation.com/form-fields/')
    cy.get('#feedbackForm').should('be.visible')
    cy.get('#name-input').type(name)
    cy.get("input[type='password']").type('1245678')
    cy.contains('Water').click()
    cy.contains('Red').click()
    cy.get('#email').type('abhik@ghy.com')
    cy.get('#message').type('love cypres')
    cy.get('#submit-btn').click()
  })
})