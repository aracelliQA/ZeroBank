describe('SearchBox test', () => {
  before ( function() {
    cy.visit('http://zero.webappsecurity.com/')
  })
  it('should type into searchbox and submit with pressin enter', () => {
    cy.get('#searchTerm').type('some text {enter}')
    cy.get('h2').contains('Search Results:')
  
  })

  
})