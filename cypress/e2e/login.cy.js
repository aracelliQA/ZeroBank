describe('Login and Logout ', () => {
    before (function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()

    })
    
    it('Should try to login with invalid data', () => {
        cy.get('.form-inputs').should('be.visible')
        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').type('invalid password')
        cy.contains('Sign in').click()
    })

    it('Should display error message', () => {
        cy.get('.alert').should('be.visible')

    })

    it('Should login to application', () => {
        cy.fixture('user').then(user =>{
            const username = user.id
            const password = user.psd
            cy.get('#user_login').type(username)
            cy.get('#user_password').type(password)
            cy.get('#user_remember_me').click()
            cy.contains('Sign in').click()
        })
        cy.get('.span12 > div > .nav').should('be.visible')

    })

    it('Should logout from application', () => {
        cy.contains('username').click()
        cy.get('#logout_link').click()
        cy.url().should('include', 'index.html')
    })

})