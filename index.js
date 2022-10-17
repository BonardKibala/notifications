#!/usr/bin/env node

/**
 * notifications
 * envoi des notifications par mail et sms
 *
 * @author bonard kibala <https://bonard-portofolio.netlify.app>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const axios = require('axios');

const db = require("./models");

const dataTests = require('./controllers/data.controller.js');

db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);
	debug && log(flags);

	if (input.includes('send')) {
		const res = await axios.get('https://api.chucknorris.io/jokes/random');
		console.log(res.data);
	}
})();
