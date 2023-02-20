import { test, expect } from "@playwright/test";

const homePage = "http://localhost:3000/";

test.describe('Desktop tests', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('http://localhost:3000/');
    });
  
    test('Form submission with invalid email shows error message', async ({ page }) => {
      // Fill in the form with invalid email
      await page.fill('#name', 'John Doe');
      await page.fill('#email', 'johndoe.com');
      await page.fill('#password', 'password123');
      await page.click('button[type="submit"]');
  
      // Check that error message is displayed
      const errorMessage = await page.$eval('.text-red-500', el => el.textContent);
      expect(errorMessage).toBe('Please enter a valid email address');
    });
  
    test('Form submission with short password shows error message', async ({ page }) => {
      // Fill in the form with short password
      await page.fill('#name', 'John Doe');
      await page.fill('#email', 'johndoe@example.com');
      await page.fill('#password', '1234567');
      await page.click('button[type="submit"]');
  
      // Check that error message is displayed
      const errorMessage = await page.$eval('.text-red-500', el => el.textContent);
      expect(errorMessage).toBe('Please enter a password with at least 8 characters');
    });
  });