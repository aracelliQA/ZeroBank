

describe('Testing inputs with an invalid user', () => {
  it('Should load login page', ()=>{
    cy.visit ('http://zero.webappsecurity.com/login.html')
    cy.clearCookies({ log: true})
    cy.clearLocalStorage('your item', {log:true})
  })

  it('Should fill username', () => {
    
    cy.get('#user_login').clear()
    cy.get('#user_login').type('Some Invalid name')

  })

  it('Should fill password', () =>{
    cy.get('#user_password').clear()
    cy.get('#user_password').type('Some invalid password')
    //Test
  })

  it('Should click checkbox', () =>{
    cy.get('#user_remember_me').should('not.be.checked')
    cy.get('#user_remember_me').click()

  })

  it('Should submit login form', () => {
    cy.contains('Sign in').click()

  })

  it('Should display error message', () =>{
    cy.get('.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong.')
  })

  
})