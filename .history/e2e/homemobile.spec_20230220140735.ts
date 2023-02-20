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

    test("testing for form inputs", async ({page}) => {
        await page.goto('http://localhost:3000/');
    
        // Fill in form inputs
        await page.fill('#name', 'John');
        await page.fill('#email', 'john@example.com');
        await page.fill('#password', 'password');
    
        // Submit form
        await page.click('button[type="submit"]');
    
        // Wait for success message
        await page.waitForSelector('.text-3xl');
    
        // Ensure success message appears
        await expect(page.locator('.text-3xl')).toHaveText('Thanks for submitting!');
      });
    
});