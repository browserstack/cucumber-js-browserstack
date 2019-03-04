'use strict';

var assert = require('cucumber-assert');
var webdriver = require('selenium-webdriver');

module.exports = function () {

  this.When(/^I type query as "([^"]*)"$/, function (searchQuery, next) {
    this.driver.get('https://www.google.com/ncr').then(() => {
      this.driver.findElement(webdriver.By.name('q'))
        .sendKeys(searchQuery).then(next);
    });
  });

  this.Then(/^I submit$/, function (next) {
    var self = this;
    this.driver.findElement({ name: 'btnK' })
      .click()
      .then(function () {
        self.driver.findElements(webdriver.By.id("top_nav")).then(found => {
          assert.equal(!!found, true, next, 'Expected !!found to be ' + true);
          next();
        });
      });
  });

  this.Then(/^I should see title "([^"]*)"$/, function (titleMatch, next) {
    this.driver.getTitle()
      .then(function (title) {
        assert.equal(title, titleMatch, next, 'Expected title to be ' + titleMatch);
      });
  });
};
