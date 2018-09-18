const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();

  // Listener for 404 errors
  page.on('console', msg => {
    console.log('Console log:',msg);
  });

  // Listener for JS errors
  page.on('pageerror', err => {
    console.log('Error log:', err);
  });

  await page.goto('http://localhost:8080/about/');
  await browser.close();
})();

