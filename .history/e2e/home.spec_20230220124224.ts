import { test, expect } from "@playwright/test";

const homePage = "http://localhost:3000/";

test.describe("Desktop tests", () => {
  let page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(homePage);
  });

  test.afterAll(async () => {
    await page.close();
  });

  test("Form submission shows success message", async ({ page }) => {
    await page.fill('input[type="text"]', 'John Doe');
    await page.fill('input[type="email"]', 'johndoe@example.com');
    await page.fill('input[type="password"]', 'password123');
    await page.click('button[type="submit"]');
    await page.waitForSelector('.animate-fade-in');
    expect(await page.isVisible('.animate-fade-in')).toBeTruthy();
  });

  test("Form validation shows errors", async () => {
    await page.click("button[type=submit]");

    const nameError = await page.textContent("span", { text: "Please enter your name" });
    expect(nameError).not.toBeNull();

    const emailError = await page.textContent("span", { text: "Please enter a valid email address" });
    expect(emailError).not.toBeNull();

    const passwordError = await page.textContent("span", { text: "Please enter a password with at least 8 characters" });
    expect(passwordError).not.toBeNull();
  });
});