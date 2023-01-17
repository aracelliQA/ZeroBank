describe('Add new Payee', () => {
  before (function (){
    cy.visit('http://zero.webappsecurity.com/index.html')
    cy.get('#signin_button').click()
    cy.fixture('user').then(user =>{
      const username = user.id
      const password = user.psd
      cy.login(username,password)
    })
    cy.contains('Pay Bills').click()
    cy.contains('Add New Payee').click()
  })

  it('Should add new payee to the list', () => {
    cy.get('#np_new_payee_name').type('test')
    cy.get('#np_new_payee_address').type('adress')
    cy.get('#np_new_payee_account').type('account')
    cy.get('#np_new_payee_details').type('details')
    cy.get('#add_new_payee').click()
  })

  it('Should show succsess message', () => {
    cy.get('#alert_content').should('be.visible')

  })

  it('Should logout from application', () => {
    cy.logout()
})

})