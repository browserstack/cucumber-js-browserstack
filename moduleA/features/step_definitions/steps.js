'use strict';

const { Given, When, Then, Before, BeforeStep } = require('@cucumber/cucumber');
const assert = require('assert');

Given('module A - flaky test - random product selection', async function () {
  const randomProductIndex = Math.random() > 0.5 ? "1" : "2000";
  const productOnScreen = await this.driver.findElement({ xpath: `//*[@id="${randomProductIndex}"]/p` });
  const productOnScreenText = await productOnScreen.getText();

  const addToCart = await this.driver.findElement({ xpath: `//*[@id="${randomProductIndex}"]/div[4]` });
  await addToCart.click();

  const productInCart = await this.driver.findElement({ xpath: '//*[@id="__next"]/div/div/div[2]/div[2]/div[2]/div/div[3]/p[1]' });
  let textMatch = false;
  for (let i = 0; i < 10; i++) {
    const cartText = await productInCart.getText();
    if (cartText.match(productOnScreenText)) {
      textMatch = true;
      break;
    }
    await new Promise(res => setTimeout(res, 500));
  }
  assert.ok(textMatch, 'Cart product text did not match selected product');
});

Given('module A - always failing test - missing element 1', async function () {
  await this.driver.findElement({ xpath: '//*[@id="non-existent-1"]/p' }).then(el => el.click());
});

Given('module A - always failing test - same stacktrace 1', async function () {
  await this.driver.findElement({ xpath: '//*[@id="common-error"]/p' }).then(el => el.click());
});

Given('module A - always failing test - same stacktrace 2', async function () {
  await this.driver.findElement({ xpath: '//*[@id="common-error"]/p' }).then(el => el.click());
});

Given('module A - always passing test - example B', async function () {
  assert(true);
});
Given('module A - always passing test - example C', async function () {
  assert(true);
});
Given('module A - always passing test - example D', async function () {
  assert(true);
});
Given('module A - always passing test - example E', async function () {
  assert(true);
});

Given('module A - passing test - verify page title', async function () {
  const title = await this.driver.getTitle();
  assert.match(title, /StackDemo/i);
});

Given('module A - Test with framework-level retry - 2 retries configured', async function () {
  assert(Math.random() > 0.7, "Test failed, retrying...");
});

Given('module A - Another Test with framework-level retry - 2 retries configured', async function () {
  assert(Math.random() > 0.7, "Test failed, retrying...");
});

Given('module A - always passing test - example A', async function () {
  const url = await this.driver.getCurrentUrl();
  assert.ok(url.includes("bstackdemo"));
});
