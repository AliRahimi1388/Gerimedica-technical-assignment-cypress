

export class BaseTest {

    navigateToUrl(visitUrl) {
        cy.visit(visitUrl)
    }

    acceptCookies() {
        cy.contains('Akkoord').click()
    }

}