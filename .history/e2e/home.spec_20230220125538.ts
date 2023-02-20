import { test, expect } from "@playwright/test";

const devices = [
  { name: 'Desktop', viewport: { width: 1280, height: 800 } },
  { name: 'iPad Air', viewport: { width: 768, height: 1024 } },
  { name: 'iPhone XR', viewport: { width: 414, height: 896 } },
];

for (const device of devices) {
  const { name, viewport } = device;

  describe(`Tests for ${name}`, () => {
    test(`Form submission with valid data shows success message`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await page.goto('http://localhost:3000/narutoep');

      const nameInput = await page.$('#name');
      await nameInput.fill('John Doe');

      const emailInput = await page.$('#email');
      await emailInput.fill('johndoe@example.com');

      const passwordInput = await page.$('#password');
      await passwordInput.fill('password123');

      const submitButton = await page.$('button[type=submit]');
      await submitButton.click();

      await page.waitForSelector('.text-3xl', { timeout: 2000 });
      const successMessage = await page.$('.text-3xl');
      const messageText = await successMessage.innerText();
      expect(messageText).toBe('Thanks for submitting!');
    });

    test(`Form submission with invalid email shows error message`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await page.goto('http://localhost:3000/');

      const nameInput = await page.$('#name');
      await nameInput.fill('John Doe');

      const emailInput = await page.$('#email');
      await emailInput.fill('johndoe');

      const passwordInput = await page.$('#password');
      await passwordInput.fill('password123');

      const submitButton = await page.$('button[type=submit]');
      await submitButton.click();

      await page.waitForSelector('.text-red-500', { timeout: 2000 });
      const errorMessage = await page.$('.text-red-500');
      const messageText = await errorMessage.innerText();
      expect(messageText).toBe('Please enter a valid email address');
    });
  });
}