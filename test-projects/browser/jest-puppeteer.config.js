// Configuration for jest-puppeteer (read automatically at runtime via cosmiconfig)
const fs = require('fs');
const puppeteer = require('puppeteer');

// Resolve which Chrome to launch: prefer an explicit path — CI sets PUPPETEER_EXECUTABLE_PATH to the runner's preinstalled Chrome (see main.yml) — otherwise fall back to the version-pinned build Puppeteer manages locally
const executablePath = process.env.PUPPETEER_EXECUTABLE_PATH || puppeteer.executablePath();

// Report the resolved binary so it's obvious where Chrome is actually running, and flag early when it's missing
console.log(
	`[jest-puppeteer] Chrome executable: ${executablePath}${fs.existsSync(executablePath) ? '' : ' — NOT FOUND'}`
);

module.exports = {
	launch: {
		executablePath,
	},
};
