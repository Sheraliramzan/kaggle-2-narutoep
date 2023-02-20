import { test, expect } from "@playwright/test";

const homePage = "http://localhost:3000/";

test.describe("Home page", () => {
  let page;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
  });

  test.afterEach(async () => {
    await page.close();
  });

  test("should load on desktop", async () => {
    await page.goto(homePage);
    await page.waitForLoadState("networkidle");

    const pageTitle = await page.title();
    expect(pageTitle).toBe("NarutoEps");

    const cardCount = await page.$$eval(".card", (cards) => cards.length);
    expect(cardCount).toBe(220);

    const faviconClass = await page.$eval(
      "link[rel=icon]",
      (link) => link.className
    );
    expect(faviconClass).not.toContain("animate-bounce");
  });

  test("should load on iPad Air", async ({ browserName }) => {
    if (browserName === "chromium") {
      const context = await browserName.NewContext({
        viewport: { width: 768, height: 1024 },
        userAgent:
          "Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/89.0.4389.82 Mobile/15E148 Safari/604.1",
      });
      page = await context.newPage();
      await page.goto(homePage);
      await page.waitForLoadState("networkidle");

      const pageTitle = await page.title();
      expect(pageTitle).toBe("NarutoEps");

      const cardCount = await page.$$eval(".card", (cards) => cards.length);
      expect(cardCount).toBe(220);

      const faviconClass = await page.$eval(
        "link[rel=icon]",
        (link) => link.className
      );
      expect(faviconClass).not.toContain("animate-bounce");
    }
  });

  test("should load on iPhone XR", async ({ browserName }) => {
    if (browserName === "webkit") {
      const context = await browserName.newContext({
        viewport: { width: 828, height: 1792 },
        userAgent:
          "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1",
      });
      page = await context.newPage();
      await page.goto(homePage);
      await page.waitForLoadState("networkidle");

      const pageTitle = await page.title();
      expect(pageTitle).toBe("NarutoEps");

      const cardCount = await page.$$eval(".card", (cards) => cards.length);
      expect(cardCount).toBe(220);

      const faviconClass = await page.$eval(
        "link[rel=icon]",
        (link) => link.className
      );
      expect(faviconClass).not.toContain("animate-bounce");
    }
  });
});

