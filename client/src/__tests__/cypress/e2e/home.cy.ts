describe('home page', () => {
  it('the h4 contains the correct text', () => {
    cy.visit('http://localhost:8080/');
    cy.get('[data-test="login-heading"]').should('exist').contains('Log into your account');
  });

  it('the home page contains  all elements', () => {
    cy.visit('http://localhost:8080/');
    cy.get('[data-testid="input-email"]').should('exist');
    cy.get('[data-testid="input-password"]').should('exist');
    cy.get('input').should('have.length', 2);
    cy.get('button').should('exist').should('have.length', 1).contains('Login');
    cy.get('p').should('exist').should('have.length', 1).contains('New User?');
    cy.get('[data-testid="signup-span"]').should('exist').contains('Click to signup');
  });
});

export {};
