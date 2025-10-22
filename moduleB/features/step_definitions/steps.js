'use strict';

const { Given, When, Then, Before, BeforeStep } = require('@cucumber/cucumber');
const assert = require('assert');

Given('module B - Flaky test - random product selection', async function () {
  const randomProductIndex = Math.random() > 0.7 ? "1" : "2000";
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

Given('module B - Another Test with framework-level retry - 2 retries configured', async function () {
  assert(Math.random() > 0.7, "Test failed, retrying...");
});

Given('module B - Failing test - same stacktrace', async function () {
  await this.driver.findElement({ xpath: '//*[@id="common-error"]/p' }).then(el => el.click());
});

Given('module B - Failing test - same stacktrace 2', async function () {
  await this.driver.findElement({ xpath: '//*[@id="common-error"]/p' }).then(el => el.click());
});

Given('module B - Always Passing test - example F', async function () {
  assert(true);
});

Given('module B - Always Passing test - example G', async function () {
  assert(true);
});

Given('module B - Always Passing test - example H', async function () {
  assert(true);
});

Given('module B - Always Passing test - example I', async function () {
  assert(true);
});

Given('module B - Passing test - verify page title', async function () {
  const title = await this.driver.getTitle();
  assert.match(title, /StackDemo/i);
});

Given('module B - Always passing test', async function () {
  const result = 6 + 3;
  assert.strictEqual(result, 9);
});

Given('module B - Always passing test - example B', async function () {
  const result = 1000 * 2;
  assert.strictEqual(result, 2000);
});

Given('module B - Always passing test - example C', async function () {
  const result = 1000 * 2;
  assert.strictEqual(result, 2000);
});

Given('module B - Always passing test - example D', async function () {
  const str1 = "BrowserStack is better than LambdaTest";
  const str2 = str1.substring(3, 10);
  assert.strictEqual(str2, "wserSta");
});

Given('module B - Always passing test - example E', async function () {
  const str1 = "BrowserStack is better than LambdaTest";
  const str2 = str1.substring(3, 11);
  assert.strictEqual(str2, "wserStac");
});

Given('module B - Test with framework-level retry - 2 retries configured', async function () {
  assert(Math.random() > 0.7, "Test failed, retrying...");
});
