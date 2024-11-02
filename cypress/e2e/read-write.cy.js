describe('cypress files', () => {
  it('read/write into json files', () => {
    cy.writeFile('test-data/data.json',{name:'peter', email: 'abhi@ghy.com'})
    cy.readFile('test-data/data.json').then((user)=>{
      expect(user.name).to.equal('peter')
    })
  })

  it('write into plain files', () => {
    cy.writeFile('test-data/plain.txt','hellow', 'ascii')
   
  })
})