'use strict';

const { Builder, Capabilities } = require("selenium-webdriver");
const { Before, After, BeforeAll, AfterAll } = require("@cucumber/cucumber");
const assert = require('assert');

var createBrowserStackSession = function(){
  return new Builder().
    usingServer('http://localhost:4444/wd/hub').
    withCapabilities(Capabilities.chrome()).
    build();
}

let globalDriver;

BeforeAll(async function () {
  globalDriver = createBrowserStackSession();
  await globalDriver.get('https://bstackdemo.com/');
  const title = await globalDriver.getTitle();
  assert.match(title, /StackDemo/i, 'Title does not match /StackDemo/i');
});

AfterAll(async function(){
  if (globalDriver) {
    await globalDriver.quit();
  }
});

// Optionally, make globalDriver available in steps via World
const { setWorldConstructor } = require('@cucumber/cucumber');
class CustomWorld {
  get driver() {
    return globalDriver;
  }
}
setWorldConstructor(CustomWorld);
