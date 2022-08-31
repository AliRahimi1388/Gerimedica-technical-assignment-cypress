

export class BaseTest {

    navigateToUrl(visitUrl) {
        cy.visit(visitUrl)
    }

    acceptCookies() {
        cy.get('.btn').contains('Akkoord').click()
    }

}