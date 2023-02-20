import {test, devices, expect} from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPhone XR'],
})

test.describe('Home mobile test', () => {
    test("testing for h1 tag", async ({page}) => {
        await page.goto('http://localhost:3000/');
        await expect(page.locator('h1')).toContainText('Login');
    });
    
});