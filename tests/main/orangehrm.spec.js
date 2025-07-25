import { test, expect } from '@playwright/test'
import { LoginPage } from '../../pages/loginPage'
import { DashboardPage } from '../../pages/dashboardPage'

test.describe('OrangeHRM Demo Site Small Scope Tests', () => {
  test.beforeEach(async ({ page }) => {
    const Login = new LoginPage(page)
    await Login.gotoLoginPage()
  })

  test.describe('Testing Login and Logout', () => {
    test('Testing Wrong/Invalid Login Credentials', async ({ page }) => {
      const Login = new LoginPage(page)
      await Login.login('Scammer1', 'WrongPassword')
      await expect(Login.invalidCredentialsError).toBeVisible()
      console.log('Invalid Username and Password testcase Passed')
    })

    test('valid Login Credentials', async ({ page }) => {
      const Login = new LoginPage(page)
      await Login.login('Admin', 'admin123')
      await expect(page).toHaveURL(/.*dashboard\/index/)
      await expect(
        page.getByRole('heading', { name: 'Dashboard' })
      ).toBeVisible()
      console.log('log in successfully with valid credentials')
    })
  })

  test.describe('Testing PIM Search Functinality', () => {
    //Before each test, navigate to Login Page and Signin
    test.beforeEach(async ({ page }) => {
      const Login = new LoginPage(page)
      const dashboardPage = new DashboardPage(page)
      await Login.gotoLoginPage()
      await Login.login('Admin', 'admin123')
      await expect(page).toHaveURL(/.*dashboard\/index/)
    })
    test('Search for employee by', async ({ page }) => {
      const dashboardPage = new DashboardPage(page)
      await dashboardPage.navigateToPIM()
      console.log('User has navigated to PIM Successfully')
      await dashboardPage.searchForEmployee('Lina  Mathur')

      // Verify the search results
      await expect(dashboardPage.searchResultsTable).toBeVisible()
      await expect(dashboardPage.searchResultsTable).toContainText('Lina')
      console.log('Employee Search was sucessful ')
    })
  })
})
