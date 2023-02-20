import {test, devices, expect} from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPad Air'],
    viewport: {width: 820, height: 1180},
})

test.describe('Home tablet test', () => {
    test("testing for h1 tag", async ({page}) => {
})