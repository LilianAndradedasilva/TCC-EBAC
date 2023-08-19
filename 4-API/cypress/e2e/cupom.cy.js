///<reference types="cypress" />

describe('Teste API-Cupons', () => {

  it('Listar cupons cadastrados', () => {
    cy.listarCupons().then((response) => {
      expect(response.status).to.equal(200)
      expect(response.body[0].id).to.not.be.null
      expect(response.duration).to.be.lessThan(1000)
    });
  });

  it('Listar cupom informando um ID', () => {
    let idCupom = 10654;
    cy.listarIdCupom(idCupom).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('Validar mensagem de cupom inválido', () => {
    cy.cupomInvalido(2123).then((response) => {
      expect(response.status).to.equal(404)
      expect(response.body.message).to.equal('ID inválido.')
    });
  });

  it('Deve cadastrar um cupom', () => {
    let cupom = `Cupom de Desconto ${Math.floor(Math.random() * 100000)}`;
    cy.cadastrarCupons(cupom, '20', 'Cupom20').then((response) => {
      expect(response.status).to.equal(201);
    });
  });

})