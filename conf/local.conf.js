exports.config = {
  user: 'BROWSERSTACK_USERNAME',
  key: 'BROWSERSTACK_ACCESS_KEY',
  server: 'hub.browserstack.com',

  capabilities: [
    {
      'browserName': 'Chrome',
      'bstack:options': {
        'useW3C': true,
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
