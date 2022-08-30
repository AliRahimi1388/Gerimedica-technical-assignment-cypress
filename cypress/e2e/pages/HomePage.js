
export class HomePage {

    clickOnCollectionExplorationByText(text) {
        cy.contains(text, { timeout: 1000 }).click()
    }

    verifyToSeeExploreCollectionLink(collectionText) {
        cy.get('.card-overview-content-end > .cta-list > ul > :nth-child(1) > .link').scrollIntoView().should('contain.text', collectionText)
    }




}