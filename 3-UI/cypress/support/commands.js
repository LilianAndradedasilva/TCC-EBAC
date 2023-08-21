Cypress.Commands.add('Login', () => {
    cy.visit('minha-conta')
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com', { log: false })
    cy.contains('input[type=submit]', 'Login').click()
  })
  
  Cypress.Commands.add('Produto', (item, tamanho, cor, quantidade) => {
    cy.contains('[class="product-block grid"]', item).click()
    cy.get('.button-variable-item-' + tamanho).click()
    cy.get('.button-variable-item-' + cor).click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
  })
  
  Cypress.Commands.add('Endereço', (nome, sobrenome, empresa, país, endereco, tipoEndereco, estado, cidade, cep, telefone) => {
    cy.get('#billing_first_name').clear().type(nome)
    cy.get('#billing_last_name').clear().type(sobrenome)
    cy.get('#billing_company').clear().type(empresa)
    cy.get('#select2-billing_country-container').type(país)
    cy.contains('.select2-results__option', país).click();
    cy.get('#billing_address_1').clear().type(endereco)
    cy.get('#billing_address_2').clear().type(tipoEndereco)
    cy.get('#billing_city').clear().type(cidade)
    cy.get('#select2-billing_state-container').type(estado)
    cy.contains('.select2-results__option', estado).click();
    cy.get('#billing_postcode').clear().type(cep)
    cy.get('#billing_phone').clear().type(telefone)
    cy.get('#terms').click()
    cy.get('#place_order').click()

  })
