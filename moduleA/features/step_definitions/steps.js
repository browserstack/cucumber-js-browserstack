'use strict';

const { Given, When, Then, Before, BeforeStep } = require('@cucumber/cucumber');
const assert = require('assert');

BeforeStep(async function () {
  await this.driver.get('https://bstackdemo.com/');
  const title = await this.driver.getTitle();
  assert.match(title, /StackDemo/i, 'Title does not match /StackDemo/i');
});

// Passing test
Given('a passing scenario in moduleA', async function () {
  assert.strictEqual(2 + 2, 4);
});

// Failing test
Given('a failing scenario in moduleA', async function () {
  assert.strictEqual(2 + 2, 5); // This will fail
});

// Flaky test
Given('a flaky scenario in moduleA', async function () {
  assert(Math.random() > 0.5, 'Flaky test failed');
});

// Framework-level retry test
Given('a retry scenario in moduleA', async function () {
  assert(Math.random() > 0.5, 'run failed');
});