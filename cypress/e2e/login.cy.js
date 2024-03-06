describe('Testowanie logowania', () => {
  it('Powinno zalogować użytkownika', () => {
    cy.visit('/login');
    cy.get('input[id="email"]').type('testuser');
    cy.get('input[id="password"]').type('password');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/builder');
  });
});