describe('Web App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  // Sanity Checks
  it('sanity check to make sure tests work', () => {
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5);
    expect({}).not.to.equal({});
    expect({}).to.eql({});
  });

  //Getters
  const nameInput = () => cy.get('input[name=name]');
  const emailInput = () => cy.get('input[name=email]');
  const size = () => cy.get('select[name=size]');
  const sauce = () => cy.get('input[name=sauce]');
  const top1 = () => cy.get('input[name=top1]');
  const top2 = () => cy.get('input[name=top2]');
  const top3 = () => cy.get('input[name=top3]');
  const top4 = () => cy.get('input[name=top4]');
  const submitBtn = () => cy.get('button[type=submit]');

  describe('Filling out the inputs and check submit button status', () => {
    it('submit button starts out disabled', () => {
      cy.contains('Order Now').click();
      submitBtn().should('be.disabled');
    });

    it('can type in the inputs', () => {
      cy.contains('Order Now').click();
      nameInput()
        .should('have.value', '')
        .type('Ethan Hunt')
        .should('have.value', 'Ethan Hunt');

      emailInput()
        .should('have.value', '')
        .type('ethan@mi.com')
        .should('have.value', 'ethan@mi.com');
    });
    it('can select multiple toppings', () => {
      cy.contains('Order Now').click();
      top1().should('not.be.checked').check().should('be.checked');
      top2().should('not.be.checked').check().should('be.checked');
      top3().should('not.be.checked').check().should('be.checked');
      top4().should('not.be.checked').check().should('be.checked');
    });
  });

  describe('can submit form', () => {
    it('form submission works', () => {
      cy.contains('Order Now').click();
      nameInput().type('Ethan Hunt');
      emailInput().type('ethan@hunt.com');
      size().select('XL');
      sauce().check('Garlic Ranch');
      top1().check();
      submitBtn().click();
    });
  });
});
