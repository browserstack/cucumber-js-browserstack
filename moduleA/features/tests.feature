Feature: ModuleA sample tests

  Scenario: A passing test
    Given a passing scenario in moduleA

  Scenario: A failing test
    Given a failing scenario in moduleA

  Scenario: A flaky test
    Given a flaky scenario in moduleA

  @retry
  Scenario: A framework-level retry test
    Given a retry scenario in moduleA