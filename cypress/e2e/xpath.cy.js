describe('Xpaths with Cypress Example', () => {
  before(function () {
    cy.visit('http://zero.webappsecurity.com/')

  })
  it('should click on element usin xpath', () => {
    cy.xpath('//button[@id="signin_button"]').should('be.visible')
    cy.xpath('//button[@id="signin_button"]').click()

  })
  it('Should display login form', () => {
    cy.xpath('//form').should('have.length', 1)
  })
})