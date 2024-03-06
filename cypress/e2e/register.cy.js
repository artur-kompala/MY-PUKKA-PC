describe('Testowanie logowania', () => {
  it('Pomyslne zarejestrowanie użytkownika', () => {
    cy.intercept('POST', 'http://localhost:5000/register').as('registerRequest');
    cy.visit('/login');
    cy.get('button[type="button"]').click();
    cy.get('input[id="username"]').type('testuser');
    cy.get('input[id="email"]').type('testuser@gmail.com');
    cy.get('input[id="password"]').type('password123');
    cy.get('button[type="submit"]').click();

    cy.wait('@registerRequest').then((interception) => {

      expect(interception.response.statusCode).to.eq(200);
    });
  });

  it('Niezarejestrowanie uzytkownikabo adres emial zajęty', () => {
    cy.intercept('POST', 'http://localhost:5000/register').as('registerRequest');
    cy.visit('/login');
    cy.get('button[type="button"]').click();
    cy.get('input[id="username"]').type('testuser');
    cy.get('input[id="email"]').type('testuser@gmail.com');
    cy.get('input[id="password"]').type('password123');
    cy.get('button[type="submit"]').click();


    cy.wait('@registerRequest').then((interception) => {

      expect(interception.response.statusCode).to.eq(406);
    });
  });
});

