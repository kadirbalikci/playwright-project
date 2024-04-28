import {expect, test} from '@playwright/test'
import {NavigationPage} from '../page-objects/NavigationPage'
import { FormLayoutsPage } from '../page-objects/formLayoutsPage'
import { datePickerPage } from '../page-objects/datepickerPage'
import { PageManager } from '../page-objects/PageManager'

test.beforeEach(async({page}, testInfo) => {
   await page.goto('http://localhost:4200/')
})

test('navigate to form page', async({page}) => {
    const pm = new PageManager(page)
    await pm.navigateTo().formLayoutsPage()
    await pm.navigateTo().datePickerPage()
    await pm.navigateTo().smartTablePage()
    await pm.navigateTo().toasterPage()
    await pm.navigateTo().tooltipPage()
})

test('parameterized methods', async({page}) => {
    const pm = new PageManager(page)
    const formLayouts = new FormLayoutsPage(page)
    const onDatePickerPage = new datePickerPage(page)

    await pm.navigateTo().formLayoutsPage()
    await pm.onFormLayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption('test@test.com', 'Welcome1', 'Option 1')
    await pm.onFormLayoutsPage().submitInlineFormWithNameEmailAndCheckbox('John Smith', 'John@test.com', false)
    await pm.navigateTo().datePickerPage()
    await pm.onDatepickerPage().selectCommonDateFromToday(5)
    await pm.onDatepickerPage().selectDatepickerWithRangeFromToday(6, 15)
})
