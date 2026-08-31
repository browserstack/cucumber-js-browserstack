Feature: ModuleA sample tests

  @regression @p1
  Scenario: flaky test - random product selection
    Given module A - flaky test - random product selection

  Scenario: always failing test - missing element 1
    Given module A - always failing test - missing element 1

  @regression
  Scenario: always failing test - same stacktrace 1
    Given module A - always failing test - same stacktrace 1

  Scenario: always failing test - same stacktrace 2
    Given module A - always failing test - same stacktrace 2

  Scenario: passing test - verify page title
    Given module A - passing test - verify page title

  @retry @regression
  Scenario: Test with framework-level retry - 2 retries configured
    Given module A - Test with framework-level retry - 2 retries configured

  @retry
  Scenario: Another Test with framework-level retry - 2 retries configured
    Given module A - Another Test with framework-level retry - 2 retries configured

  Scenario: always passing test - example A
    Given module A - always passing test - example A

  @must-pass
  Scenario: always passing test - example B
    Given module A - always passing test - example B

  Scenario: always passing test - example C
    Given module A - always passing test - example C

  Scenario: always passing test - example D
    Given module A - always passing test - example D

  @must-pass  
  Scenario: always passing test - example E
    Given module A - always passing test - example E
