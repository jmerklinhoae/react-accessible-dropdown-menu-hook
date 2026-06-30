// Configuration for jest-puppeteer (read automatically at runtime via cosmiconfig); `--no-sandbox` is required to launch Chrome inside CI containers such as GitHub-hosted runners (see https://pptr.dev/troubleshooting#setting-up-chrome-linux-sandbox), and PUPPETEER_EXECUTABLE_PATH lets CI launch the runner's preinstalled Chrome instead of a downloaded build (falls back to Puppeteer's own download locally)
module.exports = {
	launch: {
		executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || undefined,
		args: ['--no-sandbox', '--disable-setuid-sandbox'],
	},
};
