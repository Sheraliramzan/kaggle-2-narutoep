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

    test('submitting the form', async ({ page }) => {
        await page.goto('http://localhost:3000/');
        await page.fill('#name', 'Aly');
        await page.fill('#email', 'Aly@example.com');
        await page.fill('#password', '12345678');
        await page.click('button[type="submit"]');
        await page.waitForSelector('.animate-fade-in');
        const thanksText = await page.textContent('.animate-fade-in h1');
        expect(thanksText).toContain('Thanks for submitting!');
    });
    
});