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
	return await this.goToPage()
});
