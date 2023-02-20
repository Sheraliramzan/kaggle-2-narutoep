import {test, devices, expect} from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPhone XR'],
})

test.describe('Home mobile test', () => {
    test("testing for h1 tag", async ({page}) => {
        await page.goto('http://localhost:3000/narutoep');
        await expect(page.locator('h1')).toContainText('Naruto Ep Kaggle');
    });
    
  test("should load on desktop", async () => {
    await page.goto(Page);
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
});