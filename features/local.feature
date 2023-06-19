Feature: BrowserStack Local Testing

  Scenario: BStack Local Test: Can check tunnel working
    When I open dashboard
    Then I should see "BrowserStack Local"
