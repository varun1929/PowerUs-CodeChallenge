/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//

Cypress.Commands.add('acceptCookies', () => {
  cy.get('#onetrust-accept-btn-handler').click()
})
Cypress.Commands.add('assertPathUrl', (url) => {
  cy.location('pathname').should('eq', url)
})
Cypress.Commands.add('assertUrlContains', (url) => {
  cy.url().should('include', url)
})
Cypress.Commands.add('assertElementCount', (locator, length) => {
  locator.should('have.length', length)
})
Cypress.Commands.add('assertText', (locator, value) => {
  locator.invoke('text').then((text) => {
    expect(text.trim()).equal(value)
  })
})

export { };
declare global {
  namespace Cypress {
    interface Chainable {
      acceptCookies(): Chainable<void>
      assertPathUrl(url: string): Chainable<void>
      assertUrlContains(url: string): Chainable<void>
      assertElementCount(locator: any, value: number): Chainable<void>
      assertText(locator: any, value: string): Chainable<void>
    }
  }
}
