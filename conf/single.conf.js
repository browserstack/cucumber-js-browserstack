exports.config = {
  user: 'BROWSERSTACK_USERNAME',
  key: 'BROWSERSTACK_ACCESS_KEY',
  server: 'hub-cloud.browserstack.com',

  capabilities: [
    {
      'browserName': 'Chrome',
      'browserstack.use_w3c': true,
      'bstack:options': {
        'useW3C': true,
        'os': 'Windows',
        'osVersion': '7',
        'sessionName': 'Bstack single cucumber-js',
        'buildName': 'browserstack-build-1',
        'source': 'cucumber-js:sample-selenium-4-v1.0',
        'projectName': 'Test App',
        'debug': true,
      },
    }
  ]
}
