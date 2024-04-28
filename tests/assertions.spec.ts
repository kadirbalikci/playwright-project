import {expect, test} from '@playwright/test'

test('general assertions', async ({page}) => {
    const value = 5
    expect(value).toEqual(5)
 })