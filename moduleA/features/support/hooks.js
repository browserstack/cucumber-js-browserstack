'use strict';

const { Builder, Capabilities } = require("selenium-webdriver");
const { Before, After } = require("@cucumber/cucumber");

var createBrowserStackSession = function(){
  return new Builder().
    usingServer('http://localhost:4444/wd/hub').
    withCapabilities(Capabilities.chrome()).
    build();
}

Before(function (scenario, callback) {
  var world = this;
  world.driver = createBrowserStackSession();
  callback();
});

After(function(scenario, callback){
  this.driver.quit().then(function(){
    callback();
  });
});
