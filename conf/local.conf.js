exports.config = {
  user: 'BROWSERSTACK_USERNAME',
  key: 'BROWSERSTACK_ACCESS_KEY',
  server: 'hub.browserstack.com',

  capabilities: [
    {
      'browserName': 'Chrome',
      'browserstack.use_w3c': true,
      'bstack:options': {
        'os': 'Windows',
        'osVersion': '7',
        'sessionName': 'BStack local cucumber-js',
        'buildName': 'browserstack-build-1',
        'projectName': 'Test App',
        'debug': true,
        'local': true
      },
    }
  ]
}
