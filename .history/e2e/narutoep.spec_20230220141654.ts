import { test, expect } from "@playwright/test";

const narutoepPage = "http://localhost:3000/narutoep";

test.describe("Desktop tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(narutoepPage);
  });

  test("Have an h1 tag", async ({ page }) => {
    await expect(page.locator("h1")).toContainText('Naruto Ep Kaggle');
  });

  test("Render card components", async ({ page }) => {
    const cards = await page.locator("card");
    expect(cards).not.toBeEmpty();
  });
});






