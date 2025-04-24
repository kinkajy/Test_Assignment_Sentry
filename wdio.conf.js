exports.config = {
    runner: 'local',
    specs: ['./specs/**/*.js'],
    exclude: [],
    maxInstances: 1,
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: ['--headless', '--disable-gpu', '--window-size=1920,1080'],
            },
        },
    ],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'file://' + process.cwd(),
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: [
        'spec',
        [
            'allure',
            {
                outputDir: 'allure-results',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false,
            },
        ],
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        retries: 1,
    },
    before: function (_capabilities, _specs) {
        const chai = require('chai');
        global.expect = chai.expect;
    },
    afterTest: async function (test, context, { error, _result, _duration, _passed, _retries }) {
        if (error) {
            await browser.takeScreenshot();
        }
    },
};
