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

  test("Form submission shows success message", async () => {
    const name = "John Doe";
    const email = "johndoe@example.com";
    const password = "password123";

    await page.fill("#name", name);
    await page.fill("#email", email);
    await page.fill("#password", password);
    await page.click("button[type=submit]");

    await page.waitForSelector(".text-3xl", { text: "Thanks for submitting!" });
    const successMessage = await page.textContent(".text-3xl");
    expect(successMessage).toContain("Thanks for submitting!");

    await page.waitForSelector("p", { text: "Redirecting to Naruto episode..." });
    const redirectMessage = await page.textContent("p");
    expect(redirectMessage).toBe("Redirecting to Naruto episode...");
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