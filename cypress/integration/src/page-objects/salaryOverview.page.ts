class SalaryOverview {
    getBtnCheckSalary() {
        return cy.get('.title-cta > app-salary-checker-cta > .mat-focus-indicator > .mat-button-wrapper')
    }
    getDegreeCards() {
        return cy.get('app-education-step mat-card.mat-card')
    }
    getSelectedDegree(selectedDegreeOption) {
        return cy.get('app-education-step.ng-star-inserted > div > .cards').contains(selectedDegreeOption)
    }
    getExperienceCards() {
        return cy.get('app-experience-step app-chip.chip')
    }
    getSelectedExperienceInYears(selectedExperienceOption) {
        return cy.get('app-experience-step.ng-star-inserted > div > .cards').contains(selectedExperienceOption)
    }
    getTravelCards() {
        return cy.get('app-willingness-to-travel-step mat-card.mat-card')
    }
    getSelectedTravelOption(selectedETravelOption) {
        return cy.get('app-willingness-to-travel-step.ng-star-inserted > div > .cards').contains(selectedETravelOption)
    }
    getSelectedStateDropdown() {
        return cy.get('.mat-form-field-infix')
    }
    getSelectedState(state) {
        return cy.get('div[role="listbox"]').contains(state)
    }
    getSubmitState() {
        return cy.get('button[color="primary"] > .mat-button-wrapper')
    }
    getAverageSalary() {
        return cy.get(".avg-salary")
    }
    getStateResult() {
        return cy.get(':nth-child(1) > .difference')
    }
    getExperienceResult() {
        return cy.get(':nth-child(2) > .difference')
    }
    getMonthResult() {
        return cy.get(':nth-child(3) > .difference')
    }
}

export default SalaryOverview