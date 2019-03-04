exports.config = {
  user: 'BROWSERSTACK_USERNAME',
  key: 'BROWSERSTACK_ACCESS_KEY',
  server: 'hub-cloud.browserstack.com',

  capabilities: [
    {
      'browserName': 'Chrome',
      'browserstack.use_w3c': true,
      'bstack:options': {
        'os': 'Windows',
        'osVersion': '7',
        'sessionName': 'local_test',
        'buildName': 'cucumber-js-browserstack',
        'projectName': 'Test App',
        'debug': true,
        'local': true
      },
    }
  ]
}
