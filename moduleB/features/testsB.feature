Feature: ModuleB sample tests

  Scenario: Flaky test - random product selection
    Given module B - Flaky test - random product selection

  @regression @p1
  Scenario: Failing test - same stacktrace
    Given module B - Failing test - same stacktrace

  Scenario: Failing test - same stacktrace 2
    Given module B - Failing test - same stacktrace 2

  @must-pass
  Scenario: Passing test - verify page title
    Given module B - Passing test - verify page title

  Scenario: Always passing test
    Given module B - Always passing test

  Scenario: Always passing test - example B
    Given module B - Always passing test - example B

  Scenario: Always passing test - example C
    Given module B - Always passing test - example C

  Scenario: Always passing test - example D
    Given module B - Always passing test - example D

  Scenario: Always passing test - example E
    Given module B - Always passing test - example E
  
  Scenario: Always passing test - example F
    Given module B - Always passing test - example F

  Scenario: Always passing test - example G
    Given module B - Always passing test - example G

  Scenario: Always passing test - example H
    Given module B - Always passing test - example H

  Scenario: Always passing test - example I
    Given module B - Always passing test - example I

  @retry
  Scenario: Test with framework-level retry - 2 retries configured
    Given module B - Test with framework-level retry - 2 retries configured

  @retry
  Scenario: Another Test with framework-level retry - 2 retries configured
    Given module B - Another Test with framework-level retry - 2 retries configured
