const { setWorldConstructor, setDefaultTimeout  } = require("cucumber");
setDefaultTimeout(60 * 1000);
const puppeteer = require("puppeteer");

const PAGE = "http://localhost:8080/about/";

let img_err = "test 1";
let js_err = "";

class ConsoleError {
	constructor() {
	  this.error = "";
	}

	async openBrowser() {
   	  this.browser = await puppeteer.launch({headless: true});
      this.page = await this.browser.newPage();
    }

    async closeBrowser() {
      await this.browser.close();
    }

	async listeners() {
	  this.page.on('console', imgErr => {
        img_err = imgErr ;
      });

      this.page.on('pageerror', jsErr => {
        js_err = jsErr;
      });

	}

	async goToPage() {
	  await this.page.goto(PAGE);
	  await this.page.waitFor(5000);
	  console.log("Image error",img_err);
      console.log("JS error:",js_err);
	}

}

setWorldConstructor(ConsoleError);
