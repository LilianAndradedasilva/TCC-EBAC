describe('Selecionar itens e incluir ao carrinho', () => {
  
  it ('Deve incluir itens ao carrinho e finalizar o pedido', () => {
    cy.Login()
    cy.get('#primary-menu > .menu-item-629 > a').click()

    cy.visit('produtos/page/2/')
    cy.Produto('Bruno Compete Hoodie', 'M', 'Blue', 1)

    cy.visit('produtos/page/2/')
    cy.Produto('Atomic Endurance Running Tee (Crew-Neck)', 'S', 'Black', 1)

    cy.visit('produtos/page/2/')
    cy.Produto('Autumn Pullie', 'M', 'Purple', 2)

    cy.visit('produtos/page/2/')
    cy.Produto('Beaumont Summit Kit', 'XL', 'Yellow', 2)

    cy.visit('checkout')
    cy.Endereço('Maria Alice', 'Santes', 'AAR Company', 'Brasil', 'Alameda Araguaia', 'Comercial', 'São Paulo', 'Barueri', '06100000', '(11) 9999-5099')

    cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido')

  })
})