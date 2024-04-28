import {expect, test} from '@playwright/test'
import {NavigationPage} from '../page-objects/NavigationPage'

test.beforeEach(async({page}, testInfo) => {
   await page.goto('http://localhost:4200/')
})

test('navigate to form page', async({page}) => {
    const navigateTo = new NavigationPage(page)
    await navigateTo.formLayoutsPage()
    await navigateTo.datePickerPage()
    await navigateTo.smartTablePage()
    await navigateTo.toasterPage()
    await navigateTo.tooltipPage()
})