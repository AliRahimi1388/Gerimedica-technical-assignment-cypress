/// <reference types="cypress"/>

import { BaseTest } from "../pages/BaseTest";
import { CollectionPage } from "../pages/CollectionPage";
import { HomePage } from "../pages/HomePage";

describe("Testcase 1: Verification collection page", { defaultCommandTimeout: 5000 }, function () {
  const collecitonpPageSteps = new CollectionPage
  const homePageSteps = new HomePage
  const baseTestSteps = new BaseTest


  after(() => {
    cy.clearCookies()
  })

  beforeEach(() => {
    cy.fixture('constants').then((constants) => {
      baseTestSteps.navigateToUrl(constants.VAN_GOGH_MUSEUM_URL_NL)
    })
    baseTestSteps.acceptCookies()
  })


  it("TC1 : Verify Collection Page is Displayed by locating title and searchBox and url", function () {
    const COLLECTION_EXPLORE_PAGE_TEXT = "Ontdek de collectie";
    homePageSteps.verifyToSeeExploreCollectionLink(COLLECTION_EXPLORE_PAGE_TEXT)
    homePageSteps.clickOnCollectionExplorationByText(COLLECTION_EXPLORE_PAGE_TEXT)
    collecitonpPageSteps.verifyCollectionPageUrl()
    collecitonpPageSteps.verifyCollectionPageTitleIsDisplayed()
    collecitonpPageSteps.verifyCollectionPageSearchFieldIsDisplayed()
  });



});