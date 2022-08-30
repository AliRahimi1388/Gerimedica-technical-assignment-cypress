

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



}

const COLLECTION_PAGE_TITLE = "Collectie";
const COLLECTION_PAGE_URL = "https://www.vangoghmuseum.nl/nl/collectie";

