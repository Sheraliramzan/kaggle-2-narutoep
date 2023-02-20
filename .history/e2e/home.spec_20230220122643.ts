const { chromium } = require('playwright');

const homePage = "http://localhost:3000/";

describe('IndexPage on Desktop', () => {
  let browser, page;

  beforeAll(async () => {
    browser = await chromium.launch();
  });

  afterAll(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:3000');
  });

  afterEach(async () => {
    await page.close();
  });

  it('should display the form title', async () => {
    const title = await page.$eval('h1', el => el.textContent);
    expect(title).toEqual('Login');
  });

  it('should show error messages when form is submitted with invalid data', async () => {
    const submitBtn = await page.$('button[type="submit"]');
    await submitBtn.click();
    await page.waitForSelector('.text-red-500');
    const errorMessages = await page.$$('.text-red-500');
    expect(errorMessages.length).toBe(3);
  });
});