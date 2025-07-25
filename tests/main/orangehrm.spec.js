import { test, expect } from '@playwright/test'
import { LoginPage } from '../../pages/login'

test.describe('OrangeHRM Demo Site Small Scope Tests', () => {
  let Login

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
      await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
      console.log('log in successfully with valid credentials')
    })
//Before each test, navigate to Login Page and Signin
   test.beforeEach(async ({ page }) => {
    const Login = new LoginPage(page)
    await Login.gotoLoginPage()
    await Login.login('Admin', 'admin123')
      await expect(page).toHaveURL(/.*dashboard\/index/)
  })

 


  




})





})
