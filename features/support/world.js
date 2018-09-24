const { setWorldConstructor, setDefaultTimeout  } = require("cucumber");
setDefaultTimeout(60 * 1000);
const puppeteer = require("puppeteer");

const assert = require('assert');

const PAGE = "http://localhost:8080/about/";

let img_err = "";
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

	async goToLocalePage(url) {
	  await this.page.goto(url);
	  await this.page.waitFor(5000);
	  console.log("Image error: ",img_err);
      console.log("JS error:",js_err);
      console.log("Length img: ",Object.keys(img_err).length);
   	  console.log("Length JS: ",(String(js_err)).length);

   	  let img_check = Object.keys(img_err).length;
   	  let js_check = (String(js_err)).length;

   	  if (img_check != 0) {
   	  	console.log("not null!!!!!!");
   	  };

   	  if (js_check != 0) {
   	  	console.log("not null js !!!!!!");
   	  };


      assert(img_check > 0);
      assert(js_check > 0);
      
	}




}


setWorldConstructor(ConsoleError);
