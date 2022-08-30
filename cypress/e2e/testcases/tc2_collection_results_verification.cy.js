/// <reference types="cypress"/>

import { BaseTest } from "../pages/BaseTest";
import { CollectionPage } from "../pages/CollectionPage";
import { HomePage } from "../pages/HomePage";

describe("Testcase 2: Verification collection page result have more than specific size ", { defaultCommandTimeout: 5000 }, function () {
  const collecitonPageSteps = new CollectionPage
  const baseTestSteps = new BaseTest


  after(() => {
    cy.clearCookies()
  })

  before(() => {
    cy.fixture('constants').then((constants) => {
      baseTestSteps.navigateToUrl(constants.VAN_GOGH_MUSEUM_URL_COLLECTION_PAGE)
    })
    baseTestSteps.acceptCookies()
  })


  it("TC2 : Verify Collection Page results are more than 700 by searching “Het Gele Huis” ", function () {
    const paintTitle = "Het Gele Huis"
    collecitonPageSteps.verifyCollectionPageUrl()
    collecitonPageSteps.verifyCollectionPageTitleIsDisplayed()
    collecitonPageSteps.verifyCollectionPageSearchFieldIsDisplayed()
    collecitonPageSteps.searchPaintByTitle(paintTitle)
    collecitonPageSteps.verifyResultsNumberIsMoreThan(700)
  });

});