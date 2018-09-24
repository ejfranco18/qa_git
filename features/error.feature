Feature: Check console error on Gpay B2C

  #Scenario: Check the console for any JS not found errors
    #Given The listeners for JS and image are set
    #When The user goes to the GPay site
    #Then No error should be generated

  Scenario Outline: locales outline
  	Given The listeners for JS and image are set
	When The user goes to the "<url>" GPay site
	Then There should not be any errors

  	Examples:
  		|url|
  		|https://pay.google.com/intl/en_ca/about/|
  		|https://pay.google.com/intl/en_ie/about/|
  		|https://pay.google.com/intl/ru_ru/about/|
  		|http://localhost:8080/about/|
