// playwright.config.js
// @ts-check
const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	timeout: 10000,
	outputDir: './report',
	globalSetup: require.resolve('./global-setup'),
	testDir: 'tests',
	retries: 1,
	reporter: [['list'], ['html', { outputFolder: 'e2e/output' }]],
	use: {
	  screenshot: 'only-on-failure',
	  video: 'retain-on-failure',
	  trace: 'retain-on-failure',
	  viewport: { width: 1280, height: 720 },
	  baseURL: 'http://localhost:8084'
  },
  projects: [
    {
      name: 'Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //  name: 'Firefox',
    //  use: { ...devices['Desktop Firefox'] },
    // },
	// {
    //  name: 'Webkit',
    //  use: { ...devices['Desktop Webkit'] },
    // },
  ],
};

module.exports = config;
