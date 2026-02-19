import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'
const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {
  it('User Info Update- Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(
      userData.userSuccess.username,
      userData.userSuccess.password,
    )

    dashboardPage.checkDashBoardPage()
    menuPage.accessMyInfo()
    myInfoPage.fillPersonaDetails(chance.first(), chance.last())
    myInfoPage.fillEmployeeDetails(
      chance.age(),
      chance.string(),
      chance.string(),
      '2026-16-02',
    )
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
  })
})
