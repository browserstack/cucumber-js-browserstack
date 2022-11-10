'use strict';

var assert = require('assert');
const { When, Then } = require("@cucumber/cucumber");

When(/^I open dashboard$/, async function () {
  await this.driver.get('http://bs-local.com:45454/');
});

Then(/^I should see "([^"]*)"$/, async function (sourceMatch) {
  let title = await this.driver.getTitle();
  assert.equal(title.indexOf(sourceMatch) > -1, true, 'Expected source to contain ' + sourceMatch);
});
