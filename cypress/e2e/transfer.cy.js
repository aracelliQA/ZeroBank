describe('Transfer Funds', () => {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
        cy.fixture('user').then(user =>{
          const username = user.id
          const password = user.psd
          cy.login(username,password)
        })
        cy.contains('Transfer Funds').click()

    })

    it('Should fill transfer form', () => {
        cy.get('#tf_fromAccountId').select('Savings(Avail. balance = $ 1000)')
        cy.get('#tf_toAccountId').select('Checking(Avail. balance = $ -500.2)')
        cy.get('#tf_amount').type('4507')
        cy.get('#tf_description').type('description')
        cy.get('#btn_submit').click()
    })

    it('Should cancel tranfer', () => {
        cy.get('#btn_cancel').click()
        cy.url().should('contains', 'transfer-funds.html')
    })

    it('Should fill transfer form and confirm transfer', () => {
        cy.get('#tf_fromAccountId').select('Savings(Avail. balance = $ 1000)')
        cy.get('#tf_toAccountId').select('Checking(Avail. balance = $ -500.2)')
        cy.get('#tf_amount').type('4507')
        cy.get('#tf_description').type('description')
        cy.get('#btn_submit').click()
        cy.url().should('contains', 'transfer-funds-verify.html')
        cy.get('#btn_submit').click()
    })

    it('Should show success message', () => {
        cy.contains('You successfully submitted your transaction.').should('be.visible')

    })

    it('Should logout', () => {
        cy.logout()
    })
} )