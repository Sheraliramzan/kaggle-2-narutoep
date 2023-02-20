import { test, expect } from "@playwright/test";

const narutoepPage = "http://localhost:3000/narutoep";

test.describe("Desktop tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(narutoepPage);
  });

  test("Have an h1 tag", async ({ page }) => {
    await expect(page.locator("Title")).toContainText('');

  });

  test("Form submission shows success message", async ({ page }) => {
    await page.fill('input[type="text"]', 'Aly');
    await page.fill('input[type="email"]', 'Aly@example.com');
    await page.fill('input[type="password"]', '12345678');
    await page.click('button[type="submit"]');
    await page.waitForSelector('.animate-fade-in');
    expect(await page.isVisible('.animate-fade-in')).toBeTruthy();
  });

  
});

