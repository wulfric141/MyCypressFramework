describe('fixtures spec', () => {
  it('use fixtures as data provider', () => {
    cy.visit('https://practice-automation.com/modals/')
    cy.get('#formModal').click()
    cy.fixture('example.json').as('userData')
    cy.get('@userData').then((user)=>{
    cy.get('#g1051-name').type(user.name)
    })
  })
})