describe('testing sign up form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/');
  });

  it('allows new user to sign up', () => {
    cy.getByData('signup-span').click();
    cy.getByData('input-fullname').type('New Name');
    cy.getByData('input-email').type('test@test.com');
    cy.getByData('input-password').type('test1234!');
    cy.get('button').should('exist').should('have.length', 1).contains('Signup').click();
    cy.getByData('signed-username').should('exist');
  });
});

export {};
