Feature: ModuleC sample tests

  @p1
  Scenario: flaky test - random product selection
    Given module C - flaky test - random product selection

  Scenario: always failing test - missing element 1
    Given module C - always failing test - missing element 1

  Scenario: always failing test - same stacktrace 1
    Given module C - always failing test - same stacktrace 1

  Scenario: always failing test - same stacktrace 2
    Given module C - always failing test - same stacktrace 2

  Scenario: Always Passing Test - example F
    Given module C - Always Passing Test - example F

  @regression
  Scenario: Always Passing Test - example G
    Given module C - Always Passing Test - example G

  @must-pass @regression
  Scenario: Always Passing Test - example H
    Given module C - Always Passing Test - example H

  Scenario: Always Passing Test - example I
    Given module C - Always Passing Test - example I

  @must-pass
  Scenario: passing test - verify page title
    Given module C - passing test - verify page title

  @retry
  Scenario: Test with framework-level retry - 2 retries configured
    Given module C - Test with framework-level retry - 2 retries configured

  @retry
  Scenario: Another Test with framework-level retry - 2 retries configured
    Given module C - Another Test with framework-level retry - 2 retries configured
