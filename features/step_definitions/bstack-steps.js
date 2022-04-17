'use strict';

var assert = require('cucumber-assert');

module.exports = function() {
  var productText = "";
  this.Given(/^Visits bstackdemo website/, function (next) {
    this.driver.get('https://bstackdemo.com/').then(next);
  });

  this.When(/^Add a product to the cart/, function (next) {
    const productOnScreen = this.driver.findElement({xpath: '//*[@id="1"]/p'})
    productOnScreen.getText().then(function (text) {
      productText = text;
    });
    this.driver.findElement({xpath: '//*[@id="1"]/div[4]'}).click().then(next);
  });

  this.Then(/^I should see same product in cart section/, function (next) {
    this.driver.findElement({xpath: "//*[@id=\'__next\']/div/div/div[2]/div[2]/div[2]/div/div[3]/p[1]"})
    .getText()
    .then(function (text) {
      assert.equal(text, productText, next, 'Expected product to be ' + productText)
    })
  });
};
