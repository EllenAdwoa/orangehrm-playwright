exports.DashboardPage = class DashboardPage {
  constructor (page) {
    this.page = page
    //Main Dash Board Locators
    this.dashboardHeader = page.getByRole('heading', { name: 'Dashboard' })
    this.userDropdown = page.locator('p.oxd-userdropdown-name')
    this.logoutLink = page.getByRole('menuitem', { name: 'Logout' })

    // PIM Module Locators
    this.pimLink = page.getByRole('link', { name: 'PIM' })
    this.employeeNameInput = page.getByPlaceholder('Type for hints...')
    this.searchButton = page.getByRole('button', { name: 'Search' })
    this.searchResultsTable = page.locator('.oxd-table-card').first()
  }

  async navigateToPIM () {
    await this.pimLink.click()
  }

  async searchForEmployee (employeeName) {
    await this.employeeNameInput.first().fill(employeeName.split(' ')[0])

    await this.page.getByRole('option', { name: employeeName }).click()
    await this.searchButton.click()
  }

  async logout () {
    await this.userDropdown.click()
    await this.logoutLink.click()
  }
}
