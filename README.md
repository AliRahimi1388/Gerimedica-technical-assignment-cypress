# Gerimedica-technical-assignment-cypress
technical assignment Gerimedica cypress

Cypress:        10.7.0 

Technical assignment file: 
<a href="https://drive.google.com/file/d/1BTpZH7X-rQ1Y5Dsp9tztmCSuUlAY9GJL/view">Link</a> 


this include three testcases

- TC1 : Verify Collection Page is Displayed by locating title and searchBox and url

- TC2 : Verify Collection Page results are more than 700 by searching “Het Gele Huis” 

- TC3 : Verify Collection Page result by searching “Het Gele Huis” and validate text details

To run test cases in CI there are 2 way. one is that run cypress in UI by below command:

```
npx cypress open
```

furthermore, for run testcases in CLI and without UI:

```
npx cypress run
```
or :
```
npx run test
```
or
```
npx test
```

And the next one is to absolute path of spec files to run such as:

```
npm test cy:run --spec "cypress/e2e/testcases/tc3_collection_paint_details_verification.cy.js"
```

