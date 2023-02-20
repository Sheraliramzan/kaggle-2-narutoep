import { test, expect } from "@playwright/test";

const homePage = "http://localhost:3000/";

test.describe('Desktop tests', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('http://localhost:3000/');
    });
  
    test("Desktop tests: Form submission with invalid email shows error message", async ({ page }) => {
  await page.goto(homePage);

  // Fill out the form with invalid email
  await page.fill("#name", "John Doe");
  await page.fill("#email", "invalidemail");
  await page.fill("#password", "password");
  await page.click("button[type=submit]");

  // Check that the error message is displayed
  const errorMessage = await page.waitForSelector(".text-red-500");
  expect(errorMessage).not.toBeNull();
});
It's possible that the email validation is not working as expected. You can try to debug the issue by adding a console.log statement to



  
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