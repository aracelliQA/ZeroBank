describe('Pay Saved Payee ', () => {
before(function (){
    cy.visit('http://zero.webappsecurity.com/index.html')
    cy.get('#signin_button').click()
    cy.fixture('user').then(user =>{
      const username = user.id
      const password = user.psd
      cy.login(username,password)
    })
    cy.contains('Pay Bills').click()
    cy.contains('Pay Saved Payee').click()

})

it('Should send new payment (fake)', () => {
    cy.get('#sp_payee').select('Wells Fargo')
    cy.get('#sp_account').select('Credit Card')
    cy.get('#sp_amount').type('3000')
    cy.get('#sp_date').type('2020-03-04 {enter}')
    cy.get('#sp_description').type('description')
    cy.get('#pay_saved_payees').click()

})

it('Should show success message', () => {
cy.get('#alert_container').should('be.visible')

})

it('Should logout from application', () => {
    cy.logout()
})

})