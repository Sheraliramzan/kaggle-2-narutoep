import {test, devices, expect} from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPhone XR'],
})

test.describe('Home mobile test', () => {
    test("testing for h1 tag", async ({page}) => {
        await page.goto('http://localhost:3000/narutoep');
        await expect(page.locator('h1')).toContainText('Naruto Ep Kaggle');
    });
    test('Count number of h1 headers in first content area', async({ page }) => {
        await expect(page.locator('div > h1')).toHaveCount(1);
    });
});