import { expect, Locator, Page } from '@playwright/test'
import { isVoidExpression } from 'typescript'

export class HomePage {

    timeLineTitle : Locator
    searchBar : Locator
    addAccountButton : Locator
    

    constructor(page: Page) {
        this.timeLineTitle = page.locator('h6[id="time"]')
        this.searchBar = page.locator('div[class="element-search autosuggest-search-activator"]')
        this.addAccountButton = page.locator('Add Account')
    }

    validateTitleMessage(expectedTitleMessage: string): void {
        expect(this.timeLineTitle).toHaveText(expectedTitleMessage)
    }

    async clickAddAccountButton(): Promise<void> {
        await this.addAccountButton.click()
    }
}