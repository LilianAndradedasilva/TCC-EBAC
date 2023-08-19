// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('listarCupons', () => { 
    cy.request({
        method: 'GET',
        url: 'coupons',
        Username: 'admin_ebac',
        Password: '@admin!&b@c!2022',
        headers: { authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy' }
    })
})
	
Cypress.Commands.add('cadastrarCupons', (idCupom, valor, descricao) => { 
    cy.request({
        method: 'POST',
        url: 'coupons',
        Username: 'admin_ebac',
        Password: '@admin!&b@c!2022',
        headers: { authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy' },
        body: {
            "code": idCupom,
            "amount": valor,
            "discount_type": "fixed_product",
            "description": descricao
        },
        failOnStatusCode: false
    })
})

    Cypress.Commands.add('listarIdCupom', (idCupom) => {
        cy.request({
            method: 'GET',
            url: 'coupons/'+ idCupom,
            Username: 'admin_ebac',
            Password: '@admin!&b@c!2022',
            headers: { authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy' },
        })
    })
    
    Cypress.Commands.add('cupomInvalido', (idCupom) => {
        cy.request({
            method: 'GET',
            url: 'coupons/' + idCupom,
            Username: 'admin_ebac',
            Password: '@admin!&b@c!2022',
            headers: { authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy' },
            failOnStatusCode: false
        })
    })
      
