/// <reference types = "Cypress" />
import Menu from "../page-objects/menu.page"
import SalaryOverviewPage from "../page-objects/salaryOverview.page"

describe('Salary checker for electricians', () => {

    beforeEach(function () {
        cy.fixture('testData').then(function (data) {
            this.data = data
        })
    })

    it('Verify difference in salary is correctly calculated', function () {
        const menu = new Menu()
        const salaryOverviewPage = new SalaryOverviewPage()

        cy.visit('/')
        cy.acceptCookies()

        menu.getHamburgerMenu().click()
        menu.getBlogDropdown().click()
        menu.getBlogSalaryOverviewLink().click()
        cy.assertPathUrl(this.data.salaryData.SALARY_OVERVIEW_PATHNAME)

        salaryOverviewPage.getBtnCheckSalary().click()
        cy.assertUrlContains(this.data.salaryData.SALARY_CHECK_PATHNAME)
        cy.assertElementCount(salaryOverviewPage.getDegreeCards(), 4)

        salaryOverviewPage.getSelectedDegree(this.data.salaryData.DEGREE).click()
        cy.assertUrlContains(this.data.salaryData.SALARY_EXPERIENCE_URL)
        cy.assertElementCount(salaryOverviewPage.getExperienceCards(), 5)

        salaryOverviewPage.getSelectedExperienceInYears(this.data.salaryData.EXPERIENCE).click()
        cy.assertUrlContains(this.data.salaryData.SALARY_TRAVEL_URL)
        cy.assertElementCount(salaryOverviewPage.getTravelCards(), 4)

        salaryOverviewPage.getSelectedTravelOption(this.data.salaryData.TRAVEL).click()
        cy.assertUrlContains(this.data.salaryData.SALARY_STATE_URL)

        salaryOverviewPage.getSelectedStateDropdown().click()
        salaryOverviewPage.getSelectedState(this.data.salaryData.STATE).click()
        salaryOverviewPage.getSubmitState().click()

        cy.assertText(salaryOverviewPage.getAverageSalary(), this.data.results.AVG_GROSS_SALARY)
        cy.assertText(salaryOverviewPage.getStateResult(), this.data.results.AFFECT_STATE)
        cy.assertText(salaryOverviewPage.getExperienceResult(), this.data.results.AFFECT_EXPERIENCE)
        cy.assertText(salaryOverviewPage.getMonthResult(), this.data.results.AFFECT_MONTH)

    })
})