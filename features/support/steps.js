const { Given, When, Then, After, Before } = require("cucumber");

Before(async function(testCase) {
  return await this.openBrowser();
});

After(async function() {
  return await this.closeBrowser();
});

Given("The listeners for JS and image are set", async function() {
  	return await this.listeners();

});

When("The user goes to the GPay site", async function(){
	console.log("=================");
	return await this.goToPage()
	console.log(img_err);
});

// Given(/^The user goes to the (\d+) site$/, async function(url){
// 	return await this.print(url)
// })

Given("The user goes to the {string} GPay site", async function(url){
	return await this.goToLocalePage(url)
})

