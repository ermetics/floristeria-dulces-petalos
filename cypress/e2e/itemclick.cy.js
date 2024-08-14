describe('Item click', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173')
    cy.get('#ZmGrkLRPXOTpxsU4jjAcv').click()
    cy.url().should('include', 'ZmGrkLRPXOTpxsU4jjAcv')
    cy.get('#back-button').click()
    cy.url().should('not.include', 'ZmGrkLRPXOTpxsU4jjAcv')
  })
})
