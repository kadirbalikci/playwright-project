import {expect, test} from '@playwright/test'
import { timeout } from 'rxjs-compat/operator/timeout'

test.beforeEach(async({page}, testInfo) => {
   await page.goto('http://localhost:4200/')
   await page.getByText('Forms').click()
   testInfo.setTimeout(testInfo.timeout + 2000)
})

test('extracting values', async ({page}) => {
  const successButton = page.locator('.bg-success')

  await expect(successButton).toHaveText('Data loaded with AJAX get request.', {timeout: 20000})
})
