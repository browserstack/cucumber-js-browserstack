Feature: Browserstack test

  Scenario: Can add the product in cart
    Given Visits bstackdemo website
    When Add a product to the cart
    Then I should see same product in cart section