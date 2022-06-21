# cucumber-js-browserstack

[Cucumber-JS](https://github.com/cucumber/cucumber-js) Integration with BrowserStack for E2E functional testing of UI using Selenium and [browserstack-node-sdk](https://www.npmjs.com/package/browserstack-node-sdk).

Master branch contains **Selenium 3** samples, for **Selenium 4 - W3C protocol** please checkout [selenium-4](https://github.com/browserstack/cucumber-js-browserstack/tree/selenium-4) branch

![BrowserStack Logo](https://d98b8t1nnulk5.cloudfront.net/production/images/layout/logo-header.png?1469004780)

<img src = "https://cucumber.io/images/cucumber-logo.svg" height = "100">


## Setup
* Clone the repo
* Install dependencies `npm install`
* Set your [BrowserStack Username and Access Key](https://www.browserstack.com/accounts/settings) in [browserstack.yaml](browserstack.yaml).

## Running your tests
* To run sample test, run `npm run sample-test` or `yarn run sample-test`
* To run tests on private websites,
   * set browserstackLocal: true at [browserstack.yaml](browserstack.yaml)
   * run `npm run sample-local-test` or `yarn run sample-local-test`

 Understand how many parallel sessions you need by using our [Parallel Test Calculator](https://www.browserstack.com/automate/parallel-calculator?ref=github)

## Notes
* You can view your test results on the [BrowserStack Automate dashboard](https://www.browserstack.com/automate)
* To test on a different set of browsers, check out our [platform configurator](https://www.browserstack.com/automate/node#setting-os-and-browser)

## Additional Resources
* [Documentation for writing Automate test scripts in Node](https://www.browserstack.com/automate/node)
* [Customizing your tests on BrowserStack](https://www.browserstack.com/automate/capabilities)
* [Browsers & mobile devices for selenium testing on BrowserStack](https://www.browserstack.com/list-of-browsers-and-platforms?product=automate)
* [Using REST API to access information about your tests via the command-line interface](https://www.browserstack.com/automate/rest-api)
