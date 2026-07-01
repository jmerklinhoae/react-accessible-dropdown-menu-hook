module.exports = {
	launch: {
		executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
		args: ['--disable-setuid-sandbox'],
	},
};
