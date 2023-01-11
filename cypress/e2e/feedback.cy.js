describe('Feedback Test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#feedback').click()
    })

    it('Should load feedback form', () =>{
        cy.url().should('include', 'feedback.html')
        cy.get('h3').should('be.visible')
        cy.get('form').should('be.visible')

    })

    it('Should fill feedback form', () =>{
        cy.get('#name').type('Ana')
        cy.get('#email').type('ana@email.com')
        cy.get('#subject').type('teste')
        cy.get('#comment').type('teste teste teste')
    })
    
   it('Should submit feedback form', () =>{
    cy.contains('Send Message').click()
        
    })

    it('Should display feedback message', () =>{
    cy.get('.offset3').should('be.visible')
        
    })
}) 