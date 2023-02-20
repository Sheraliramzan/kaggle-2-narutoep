import { test, expect } from "@playwright/test";

const narutoepPage = "http://localhost:3000/narutoep";

test.describe("Desktop tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(narutoepPage);
  });

  test("Have an h1 tag", async ({ page }) => {
    await expect(page.locator("h1")).toContainText('Naruto Ep Kaggle');
  });

  test("checking if there is an Image with size of width and height of 30px", async ({
    page,
  }) => {
    await page.goto(narutoepPage);
    const image = page.locator("img");
    const compStyles = await image.evaluate((element) => {
      const styles = window.getComputedStyle(element);
      return {
        width: styles.width,
        height: styles.height,
      };
    });
    expect(compStyles.width).toEqual("30px");
    expect(compStyles.height).toEqual("30px");
  });
});






