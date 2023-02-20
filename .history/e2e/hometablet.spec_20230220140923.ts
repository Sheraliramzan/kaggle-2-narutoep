import {test, devices, expect} from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPad Air'],
    viewport: {width: 820, height: 1180},
})

test.describe('Home tablet test', () => {
    test("testing for h1 tag", async ({page}) => {
        await page.goto('http://localhost:3000/');
        await expect(page.locator('h1')).toContainText('Login');
    });
    
    test('submitting the form', async ({ page }) => {
        await page.goto('http://localhost:3000/');
        await page.fill('#name', 'Aly');
        await page.fill('#email', 'johndoe@example.com');
        await page.fill('#password', '12345678');
        await page.click('button[type="submit"]');
        await page.waitForSelector('.animate-fade-in');
        const thanksText = await page.textContent('.animate-fade-in h1');
        expect(thanksText).toContain('Thanks for submitting!');
    });
});