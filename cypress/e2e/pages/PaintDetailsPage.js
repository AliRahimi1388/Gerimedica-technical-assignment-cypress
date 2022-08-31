

export class PaintDetailsPage {


    clickAndToggleInfoObjectOfPaiting() {
        cy.get(':nth-child(1) > .accordion-item-button > button').click()
    }

    verifyPaintTitleH1(title) {
        cy.contains(title).scrollIntoView().should('be.visible')
    }

    clickOnObjectgegevens() {
        cy.contains(OBJECTGEGEVENS_TEXT, { timeout: 6000 }).scrollIntoView().should('be.visible')
        cy.contains(OBJECTGEGEVENS_TEXT, { timeout: 6000 }).click()
    }


    verifyFNummer(number) {
        cy.get(':nth-child(1) > .definition-list-item-value').should('contain.text', number)
    }

    verifyJHNumber(number) {
        cy.get(':nth-child(2) > .definition-list-item-value').should('contain.text', number)
    }

    verifyInventarisnummer(id) {
        cy.get(':nth-child(3) > .definition-list-item-value').should('contain.text', id)
    }

}

const OBJECTGEGEVENS_TEXT = "Objectgegevens";