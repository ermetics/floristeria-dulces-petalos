describe('Search input', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173');
    cy.get('#input-1').type('orquídea');
    cy.get('#clear-input-search').click();
    cy.get('#input-1').should('have.value', '');
  });
});
