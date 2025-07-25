import { test, expect } from '@playwright/test'
import { LoginPage } from '../../pages/loginPage'
import { DashboardPage } from '../../pages/dashboardPage'

test.describe('OrangeHRM Demo Site Small Scope Tests', () => {
  test.beforeEach(async ({ page }) => {
    const Login = new LoginPage(page)
    await Login.gotoLoginPage()
  })

  test.describe('Testing Login', () => {
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

  test.describe('LogOut and Testing PIM Search Functinality', () => {
    //Before each test, navigate to Login Page and Signin
    test.beforeEach(async ({ page }) => {
      const Login = new LoginPage(page)
      const dashboardPage = new DashboardPage(page)
      await Login.gotoLoginPage()
      await Login.login('Admin', 'admin123')
      await expect(page).toHaveURL(/.*dashboard\/index/)
    })

          test('log out successfully', async ({page}) => {
    const Login = new LoginPage(page)
      const dashboardPage = new DashboardPage(page)
      await dashboardPage.logout()
      await expect(Login.login_button).toBeVisible()
      console.log('log Out was successful ')
    });

    test('Search for employee by', async ({ page }) => {
      const dashboardPage = new DashboardPage(page)
      await dashboardPage.navigateToPIM()
      console.log('User has navigated to PIM Successfully')
      console.log('Employee Names changes therefore changed the name to an active employee ')
      await dashboardPage.searchForEmployee('Lina  Mathur')

      // Verify the search results
      await expect(dashboardPage.searchResultsTable).toBeVisible()
      await expect(dashboardPage.searchResultsTable).toContainText('Lina')
      console.log('Employee Search was sucessful ')
    })
  })
  


})
