const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();


  // page.on('console', msg => {
  //   console.log('Console log:', msg);
  // });

  // page.on('pageerror', err => {
  //   error = err;
  //   console.log('Error log', err);
  // });





  await page.goto('http://localhost:8080/about/');
  // await page.goto('http://pay.google.com/about/');


  await browser.close();
})();

