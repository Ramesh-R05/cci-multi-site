describe('@sitELLE homepage', () => {
    before(() => {
        cy.visit('/');
    });

    it('loads', () => {
        cy.url().should('contain', '/');
    });
});
