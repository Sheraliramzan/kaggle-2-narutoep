import { test, expect } from "@playwright/test";

const narutoepPage = "http://localhost:3000/narutoep";

test.describe("Desktop tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(narutoepPage);
  });

  test("Have an h1 tag", async ({ page }) => {
    await expect(page.locator("h1")).toContainText('Naruto Ep Kaggle');
  });

  test('Count number of div headers in first content area', async({ page }) => {
    await expect(page.locator('div >1')).toHaveCount(4);
})
});






