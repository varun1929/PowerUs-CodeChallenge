class Menu {
    getHamburgerMenu() {
        return cy.get('[aria-label="Menü öffnen"]')
    }
    getBlogDropdown() {
        return cy.get('div.nav-list-container > app-header-dropdown')
    }
    getBlogSalaryOverviewLink() {
        return cy.get('.menu > :nth-child(1) > .mat-button-wrapper').contains('Elektriker Gehalt Übersicht')
    }
}

export default Menu