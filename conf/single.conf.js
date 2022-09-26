exports.config = {
  user: 'BROWSERSTACK_USERNAME',
  key: 'BROWSERSTACK_ACCESS_KEY',
  server: 'hub-cloud.browserstack.com',

  capabilities: [{
    browserName: 'chrome',
    name: "single_test",
    build: "cucumber-js-browserstack",
    source: "cucumber:sample-selenium-3-v1.0"
  }]
}
