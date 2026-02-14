import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {
  const selectorsList = {
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: '.oxd-input',
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: '.--close',
    submitButton: "[type='submit']",
    genericComboBox: '.oxd-select-text--arrow',
    secondItemComboBox: '.oxd-select-dropdown > :nth-child(6)',
    thirdItemComboBox: '.oxd-select-dropdown > :nth-child(3)',
  }

  it.only('User Info Update- Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(
      userData.userSuccess.username,
      userData.userSuccess.password,
    )
    dashboardPage.checkDashBoardPage()
    menuPage.accessMyInfo()
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.genericField).eq(4).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(5).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('DriversLicenseTest')
    cy.get(selectorsList.dateField).eq(0).clear().type('2026-13-01')
    cy.get(selectorsList.dateCloseButton).click({ force: true })
    cy.get(selectorsList.submitButton).eq(0).click({ force: true })
    cy.get(selectorsList.genericComboBox).eq(0).click({ force: true })
    cy.get(selectorsList.secondItemComboBox).click({ force: true })
    cy.get(selectorsList.genericComboBox).eq(1).click({ force: true })
    cy.get(selectorsList.thirdItemComboBox).click({ force: true })
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})
