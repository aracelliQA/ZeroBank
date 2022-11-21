describe('Devices Tests',()=>{
    it('720p', ()=>{
        cy.viewport(1280,720)
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.wait(3000)
    })

    it('1080p', ()=>{
        cy.viewport(1980,1080)
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.wait(3000)
    })
    it('iphone X', ()=>{
        cy.viewport('iphone-x')
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.wait(3000)
    })
})