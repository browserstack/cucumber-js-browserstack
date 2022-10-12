exports.config = {
  user: 'BROWSERSTACK_USERNAME',
  key: 'BROWSERSTACK_ACCESS_KEY',
  server: 'hub.browserstack.com',
  commonCapabilities: {
    'bstack:options': {
      'sessionName': 'BStack parallel cucumber-js',
      'useW3C': true,
      'buildName': 'browserstack-build-1',
      'projectName': 'Test App',
      'debug': true,
    },
  },

  capabilities: [{
    browserName: 'chrome'
  },{
    browserName: 'firefox'
  },{
    browserName: 'internet explorer'
  },{
    browserName: 'safari'
  }],
}

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps){
    Object.assign(caps, exports.config.commonCapabilities);
});

