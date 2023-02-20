import { test, expect } from "@playwright/test";

const narutoepPage = "http://localhost:3000/narutoep";

test.describe("Desktop tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(narutoepPage);
  });

  test("Have an h1 tag", async ({ page }) => {
    await expect(page.locator("h1")).toContainText('Naruto Ep Kaggle');
  });

  test('Count number of h2 headers in first content area', async({ page }) => {
    await page.goto(narutoepPage);

    await expect(page.locator('div > h2')).toHaveCount(2);
})
});






