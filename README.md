
**`orangehrm-playwright`**.
# orangehrm-playwright

End-to-end Playwright test suite and examples for **OrangeHRM** — covering login, admin, and employee management flows.

---

##  About
This repository contains **Playwright**-based end-to-end (E2E) test scripts for [OrangeHRM](https://www.orangehrm.com/).  
It demonstrates how to automate testing of core HR modules like:
- Logging into the HR system
- Adding and editing employees
- Managing admin users
- Validating dashboard and navigation functionalities

The goal is to help QA engineers and developers easily set up, run, and expand Playwright test automation for HR systems.

---

## 🚀 Features
- **Playwright** framework for fast, reliable testing  
- **Cross-browser** testing (Chromium, Firefox, WebKit)  
- **Configurable environment variables** for easy customization  
- **GitHub Actions** workflow for CI/CD automation  
- Example **page object model (POM)** setup  

---

## 🧰 Prerequisites
Before starting, ensure you have:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm or yarn
- Git installed
- A GitHub account (if you plan to push changes)

---

## ⚙️ Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/EllenAdwoa/orangehrm-playwright.git
cd orangehrm-playwright
````

### 2️⃣ Install dependencies

```bash
npm install
```

or

```bash
npm ci
```

### 3️⃣ Set up environment variables

Create a `.env` file in the root directory:

```
BASE_URL=https://opensource-demo.orangehrmlive.com/
USERNAME=admin
PASSWORD=admin123
```

> ⚠️ **Note:** Never commit `.env` files to GitHub — they may contain sensitive credentials. Add `.env` to your `.gitignore`.

---

## 🧪 Running Tests

### Run all tests (headless)

```bash
npx playwright test
```

### Run tests in headed (visible) mode

```bash
npx playwright test --headed
```

### Run a specific test file

```bash
npx playwright test tests/login.spec.js
```

### Run with debugging

```bash
npx playwright test --debug
```

---

## 🧱 Folder Structure

```
orangehrm-playwright/
│
├── tests/                     # Test cases
│   ├── login.spec.js
│   └── employee.spec.js
│
├── pages/                     # Page Object Models
│   ├── loginPage.js
│   └── dashboardPage.js
│
├── playwright.config.js       # Playwright configuration file
├── package.json
├── .env                       # Local environment variables (not committed)
├── .gitignore
└── README.md
```

---

## 🧩 Example Test: Login

Here’s a simple example test that checks login functionality:

```javascript
import { test, expect } from '@playwright/test';

test('Login to OrangeHRM', async ({ page }) => {
  await page.goto(process.env.BASE_URL);
  await page.fill('input[name="username"]', process.env.USERNAME);
  await page.fill('input[name="password"]', process.env.PASSWORD);
  await page.click('button[type="submit"]');
  await expect(page.locator('h6')).toContainText('Dashboard');
});
```

---

## 🧪 Run Tests in GitHub Actions (CI)

This repo includes an example workflow at `.github/workflows/playwright.yml`.

To enable it:

1. Push your project to GitHub.
2. Go to **Actions → Enable workflows**.
3. The workflow will automatically run on every push or pull request.

Example snippet:

```yaml
name: Playwright Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npx playwright install
      - run: npx playwright test
```

---

## 🧑🏽‍💻 Contributing

Contributions are welcome! Follow these steps to add improvements:

1. **Fork** the repository
2. **Create a branch** for your feature or fix

   ```bash
   git checkout -b feat/my-new-test
   ```
3. **Commit** your changes

   ```bash
   git commit -m "Add employee creation test"
   ```
4. **Push** your branch

   ```bash
   git push origin feat/my-new-test
   ```
5. Open a **Pull Request** describing your changes.

---

## ⚠️ Troubleshooting

**Problem:** `remote: Permission denied`
✅ **Fix:** You might be pushing to a repo you don’t own. Run:

```bash
git remote -v
git remote set-url origin https://github.com/EllenAdwoa/orangehrm-playwright.git
```

**Problem:** `403` Authentication error
✅ **Fix:** Use a **Personal Access Token (PAT)** instead of your GitHub password when prompted.

**Problem:** Tests fail due to missing environment variables
✅ **Fix:** Ensure `.env` is configured with valid credentials and URLs.

---

## 🧾 License

This project is licensed under the **MIT License** — feel free to modify and share.

---

## 🌟 Acknowledgements

* [Playwright](https://playwright.dev/)
* [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com/)
* Contributors, testers, and mentors who helped shape this project.

---

### 👩🏽‍💻 Author

**Ellen Adwoa Nyini**
Quality Assurance / Project Manager
[GitHub: EllenAdwoa](https://github.com/EllenAdwoa)

---

> “Test smarter, automate faster, and make quality a habit.”

```

---

Would you like me to also create a **`playwright.yml` GitHub Actions workflow file** (to add inside `.github/workflows/`) so your tests can run automatically when you push code?
```
