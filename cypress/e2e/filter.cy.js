describe('Transfer Funds', () => {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
        cy.fixture('user').then(user =>{
          const username = user.id
          const password = user.psd
          cy.login(username,password)
        })
        cy.contains('Account Activity').click()
        cy.contains('Find Transactions').click()

    })

    it('Should filter transactions by amounts', ()=>{
        
        cy.get('#aa_fromAmount').type('200')
        cy.get('#aa_toAmount').type('4000')
        cy.get('button[type="submit"]').click()
       
    }) 
    it('Should filter transactions by date and show no results message', () =>{
        cy.get('#aa_fromAmount').clear()
        cy.get('#aa_toAmount').clear()
        cy.get('#aa_fromDate').type('2023-01-24 {enter}')
        cy.get('#aa_toDate').type('2023-01-31 {enter}')
        cy.get('button[type="submit"]').click()
        

    })

  

    

   
})