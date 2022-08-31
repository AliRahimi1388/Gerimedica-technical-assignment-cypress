

export class CollectionPage {


    verifyCollectionPageTitleIsDisplayed() {
        cy.get('h1').should('have.text', COLLECTION_PAGE_TITLE)
    }

    verifyCollectionPageSearchFieldIsDisplayed() {
        cy.get('[class= "search-field-input"]').should('be.visible')
    }

    verifyCollectionPageUrl() {
        cy.url().should('eq', COLLECTION_PAGE_URL)
    }

    searchPaintByTitle(paintText) {
        cy.get('[placeholder="Zoek een kunstwerk"]').type(paintText + "{Enter}")
    }

    verifyResultsNumberIsMoreThan(number) {
        cy.get('[class="results"]')
            .invoke('text')
            .then(parseInt)
            .should('be.a', 'number')
            .should('be.greaterThan', number)
    }

    clickOnFirstResultFirst() {
        cy.get('[role="article"]').first().click()
    }
}

const COLLECTION_PAGE_TITLE = "Collectie";
const COLLECTION_PAGE_URL = "https://www.vangoghmuseum.nl/nl/collectie";

