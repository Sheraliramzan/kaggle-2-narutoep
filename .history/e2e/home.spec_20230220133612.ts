import { test, expect } from "@playwright/test";

const homePage = "http://localhost:3000/";

test.describe("Desktop tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(homePage);
  });

  test("Page title is correct", async ({ page }) => {}
  

  test("Form submission shows success message", async ({ page }) => {
    await page.fill('input[type="text"]', 'John Doe');
    await page.fill('input[type="email"]', 'johndoe@example.com');
    await page.fill('input[type="password"]', 'password123');
    await page.click('button[type="submit"]');
    await page.waitForSelector('.animate-fade-in');
    expect(await page.isVisible('.animate-fade-in')).toBeTruthy();
  });

  
});