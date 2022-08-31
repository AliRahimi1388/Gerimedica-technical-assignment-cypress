/// <reference types="cypress"/>

import { BaseTest } from "../pages/BaseTest";
import { CollectionPage } from "../pages/CollectionPage";
import { PaintDetailsPage } from "../pages/PaintDetailsPage";

describe("Testcase 3: Verification Paint Details in detail page ", { defaultCommandTimeout: 5000 }, function () {
  const collecitonPageSteps = new CollectionPage
  const baseTestSteps = new BaseTest
  const paintDetailsPage = new PaintDetailsPage


  after(() => {
    cy.clearCookies()
  })

  before(() => {
    cy.intercept('POST', 'https://b.clarity.ms/collect', {})
    cy.intercept('POST', 'https://**.vangoghmuseum.nl/**', {})

    cy.fixture('constants').then((constants) => {
      baseTestSteps.navigateToUrl(constants.VAN_GOGH_MUSEUM_URL_COLLECTION_PAGE)
    })
    baseTestSteps.acceptCookies()
  })


  it("TC3 : Verify Collection Page result by searching “Het Gele Huis” and validate text details", function () {

    const paintTitle = "Het Gele Huis"
    const f_number = "F0464"
    const jh_number = "JH1589"
    const inventar_id = "s0032V1962"
    
    collecitonPageSteps.verifyCollectionPageUrl()
    collecitonPageSteps.verifyCollectionPageTitleIsDisplayed()
    collecitonPageSteps.verifyCollectionPageSearchFieldIsDisplayed()
    collecitonPageSteps.searchPaintByTitle(paintTitle)
    collecitonPageSteps.clickOnFirstResultFirst()
    paintDetailsPage.verifyPaintTitleH1(paintTitle)
    paintDetailsPage.clickOnObjectgegevens()
    paintDetailsPage.verifyFNummer(f_number)
    paintDetailsPage.verifyJHNumber(jh_number)
    paintDetailsPage.verifyInventarisnummer(inventar_id)
  });

});