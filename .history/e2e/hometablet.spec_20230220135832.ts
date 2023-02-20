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
    test("Form submission shows success message", async ({ page }) => {
        await page.fill('input[type="text"]', 'John Doe');
        await page.fill('input[type="email"]', 'johndoe@example.com');
        await page.fill('input[type="password"]', 'password123');
        await page.click('button[type="submit"]');
        await page.waitForSelector('.animate-fade-in');
        expect(await page.isVisible('.animate-fade-in')).toBeTruthy();
      }); 
});