import {expect, test} from '@playwright/test'
import {NavigationPage} from '../page-objects/NavigationPage'
import { FormLayoutsPage } from '../page-objects/formLayoutsPage'
import { datePickerPage } from '../page-objects/datepickerPage'

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

test('parameterized methods', async({page}) => {
    const navigateTo = new NavigationPage(page)
    const formLayouts = new FormLayoutsPage(page)
    const onDatePickerPage = new datePickerPage(page)

    await navigateTo.formLayoutsPage()
    await formLayouts.submitUsingTheGridFormWithCredentialsAndSelectOption('test@test.com', 'Welcome1', 'Option 1')
    await formLayouts.submitInlineFormWithNameEmailAndCheckbox('John Smith', 'John@test.com', false)
    await navigateTo.datePickerPage()
    await onDatePickerPage.selectCommonDateFromToday(5)
    await onDatePickerPage.selectDatepickerWithRangeFromToday(6, 15)
})
