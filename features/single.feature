Feature: Browserstack test

  Scenario: BStack Sample Test: Can add a product to the cart
    Given I visit bstackdemo website
    When I add a product to the cart
    Then I should see the same product in the cart section
