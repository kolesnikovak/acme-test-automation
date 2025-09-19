import { test } from '@playwright/test'
import { LoginPage } from '../pages/loginPage' 
import { HomePage } from '../pages/homePage' 

test('time line title validation', async ({ page }) => {
    
    let loginPage = new LoginPage(page)
    await page.goto("https://demo.applitools.com/")
    await loginPage.login("qa_tester", "qa_tester!")

    let homePage = new HomePage(page)
    await homePage.validateTitleMessage("Your nearest branch closes in: 30m 5s")
})