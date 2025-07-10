const { chromium } = require('playwright');

(async () => {
  // Launch browser
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  // Go to a website
  await page.goto('https://example.com');

  // Take a screenshot with browser visible (headless: false)
  await page.screenshot({ path: 'example.png' });

  // Print the title
  const title = await page.title();
  console.log('Page Title:', title);

  // Close browser
  await browser.close();
})();
