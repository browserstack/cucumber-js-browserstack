'use strict';

var assert = require('cucumber-assert');
var webdriver = require('selenium-webdriver');

module.exports = function() {

  this.When(/^I type query as "([^"]*)"$/, function (searchQuery, next) {
    this.driver.get('https://www.google.com/ncr');
    this.driver.findElement({ name: 'q' })
      .sendKeys(searchQuery).then(next);
  });

  this.Then(/^I submit$/, function (next) {
    this.driver.findElement({ name: 'q' })
      .sendKeys("\n").then(next);
  });

  this.Then(/^I should see title "([^"]*)"$/, function (titleMatch, next) {
    this.driver.getTitle()
      .then(function(title) {
        assert.equal(title, titleMatch, next, 'Expected title to be ' + titleMatch);
      });
  });
};
