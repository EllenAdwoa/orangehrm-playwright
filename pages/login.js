exports.LoginPage = class LoginPage{
    constructor(page){
    this.page = page
    
    this.username_textbox = page.getByRole('textbox', { name: 'Username' });
    this.password_testbox = page.getByRole('textbox', { name: 'Password' })
    this.login_button = page.getByRole('button', { name: 'Login' })
    this.invalidCredentialsError = page.getByRole('alert').locator('div').filter({ hasText: 'Invalid credentials' })
    }


    // enterUsername(){}

// enterPassword(){}

// clickLogin()

async gotoLoginPage(){
    await this.page.goto('/')
}

async login(username, password){

    await this.username_textbox.fill(username)
    await this.password_testbox.fill(password)
    await this.login_button.click()
}
}



