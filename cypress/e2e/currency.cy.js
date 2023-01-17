describe ('Currency Exchange Test', () => {
before(function () {
    cy.visit('http://zero.webappsecurity.com/index.html')
    cy.get('#signin_button').click()
    cy.fixture('user').then(user =>{
      const username = user.id
      const password = user.psd
      cy.login(username,password)
    })
    cy.contains('Pay Bills').click()
    cy.contains('Purchase Foreign Currency').click()
})

it("Should fill conversion form", () => {
    cy.get('#pc_currency').select('Canada (dollar)')
    cy.get('#pc_amount').type('2400')
    cy.get('#pc_inDollars_false').click()
    cy.get('#pc_conversion_amount').should('be.visible')
    cy.get('#purchase_cash').click()


})

it('Should display conversion amount', () => {
    cy.get('#alert_content').should('be.visible')

})

it('Should logout from application', () => {
    cy.logout()
})

})