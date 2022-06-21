'use strict';

var assert = require('assert');
const { Given, When, Then } = require("@cucumber/cucumber");
const { By, until } = require("selenium-webdriver");

var productText = "";
Given(/^I visit bstackdemo website/, async function () {
  await this.driver.get('https://bstackdemo.com/');
});

When(/^I add a product to the cart/, async function () {
  await this.driver.wait(until.elementLocated(By.xpath('//*[@id="1"]/p')));
  productText = await this.driver.findElement(By.xpath('//*[@id="1"]/p')).getText();
  await this.driver.findElement({xpath: '//*[@id="1"]/div[4]'}).click();
});

Then(/^I should see the same product in the cart section/, async function () {
  await this.driver.wait(until.elementLocated(By.className("float-cart__content")));
  await this.driver.findElement(By.className("float-cart__content"));

  await this.driver.wait(until.elementLocated(By.xpath('//*[@id="__next"]/div/div/div[2]/div[2]/div[2]/div/div[3]/p[1]')));
  let productCartText = await this.driver
          .findElement(
            By.xpath(
              '//*[@id="__next"]/div/div/div[2]/div[2]/div[2]/div/div[3]/p[1]'
            )
          )
          .getText();

  assert.equal(productCartText, productText, 'Expected product to be ' + productText)
});
