Feature: Check console error on Gpay B2C

  Scenario: Check the console for any JS not found errors
    Given The listeners for JS and image are set
    When The user goes to the GPay site
    Then No error should be generated