Feature: BrowserStack Local Testing

  Scenario: Can check tunnel working
    When I open dashboard
    Then I should see "BrowserStack Local"
