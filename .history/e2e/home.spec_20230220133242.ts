import { test, expect } from "@playwright/test";

const homePage = "http://localhost:3000/";

test.describe("Desktop tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(homePage);
  });

  test("Form submission with valid data", async ({ page }) => {
    // Fill out the form with valid data
    await page.fill("#name", "John Doe");
    await page.fill("#email", "johndoe@example.com");
    await page.fill("#password", "password123");
    await page.click("button[type=submit]");

    // Wait for success message to appear
    const successMessage = await page.waitForSelector(".text-3xl");
    expect(await successMessage.textContent()).toContain("Thanks for submitting!");
  });

  test("Form submission with invalid email shows error message", async ({ page }) => {
    // Fill out the form with invalid email
    await page.fill("#name", "John Doe");
    await page.fill("#email", "johndoe");
    await page.fill("#password", "password123");
    await page.click("button[type=submit]");

    // Wait for error message to appear
    const errorMessage = await page.waitForSelector(".text-red-500");
    expect(await errorMessage.textContent()).toContain("Please enter a valid email address");
  });
});