exports.config = {
  user: 'BROWSERSTACK_USERNAME',
  key: 'BROWSERSTACK_ACCESS_KEY',
  server: 'hub-cloud.browserstack.com',

  commonCapabilities: {
    name: "parallel_test",
    build: "cucumber-js-browserstack",
    source: "cucumber:sample-selenium-3-v1.0",
  },

  capabilities: [{
    browserName: 'chrome'
  },{
    browserName: 'firefox'
  },{
    browserName: 'safari',
    browserVersion: '12'
  },{
    browserName: 'internet explorer',
    browserVersion: '11'
  }]
}

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps){
  for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
