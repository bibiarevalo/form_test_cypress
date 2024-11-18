describe('verificando se informações foram salvas', () => {
  beforeEach(() => {
    cy.visit('index.html');  
});
  it('Deve preencher o formulario', () => {
    cy.get('input#name').type('Beatriz')
    cy.wait(1000)

    cy.get('input#email').type('bia@gmail.com')
    cy.wait(1000)

    cy.get('input#number').type('123456789')
    cy.wait(3000)
    
    cy.get('button[type="submit"]').click()

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Sucesso! Informações preenchidas corretamente.');
    });
    cy.wait(3000)
  })
  it('deve alertar caso algum campo não seja preenchido', () => {
    cy.get('#button').click();

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Por favor, preencha todos os campos!');
    });
  })
})