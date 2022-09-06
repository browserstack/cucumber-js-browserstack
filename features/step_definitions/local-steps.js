'use strict';

var assert = require('assert');
const { When, Then } = require("@cucumber/cucumber");

When(/^I open health check$/, async function () {
  await this.driver.get('http://bs-local.com:45691/check');
});

Then(/^I should see "([^"]*)"$/, async function (sourceMatch) {
  let source = await this.driver.getPageSource();
  assert.equal(source.indexOf(sourceMatch) > -1, true, 'Expected source to contain ' + sourceMatch);
});
