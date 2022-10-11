// Init
const fs = require('node:fs');
const path = require('node:path');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');
const { token, clientID, guildID, guildJarvis } = require('./data/config.json')
//----------

// ALL Commands
const commands = []

// ---Commands register---
const commandsPath = path.join(__dirname, 'commands');
const commandsFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (file of commandsFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	commands.push(command.data.toJSON())
}

// ---Admin register---
const adminPath = path.join(__dirname, 'commands/admin');
const adminFiles = fs.readdirSync(adminPath).filter(file => file.endsWith('.js'));

for (file of adminFiles) {
	const filePath = path.join(adminPath, file);
	const admin = require(filePath);
	commands.push(admin.data.toJSON())
}

// ---Utils register---
const utilsPath = path.join(__dirname, 'commands/utils');
const utilsFiles = fs.readdirSync(utilsPath).filter(file => file.endsWith('.js'));

for (file of utilsFiles) {
	const filePath = path.join(utilsPath, file);
	const utils = require(filePath);

	commands.push(utils.data.toJSON())
}

// ---Stats register---
const statsPath = path.join(__dirname, 'commands/stats');
const statsFiles = fs.readdirSync(statsPath).filter(file => file.endsWith('.js'));

for (file of statsFiles) {
	const filePath = path.join(statsPath, file);
	const stats = require(filePath);

	commands.push(stats.data.toJSON())
}

// ---Moderations register---
const moderationsPath = path.join(__dirname, 'commands/moderations');
const moderationsFiles = fs.readdirSync(moderationsPath).filter(file => file.endsWith('.js'));

for (file of moderationsFiles) {
	const filePath = path.join(moderationsPath, file);
	const moderations = require(filePath);

	commands.push(moderations.data.toJSON())
}

// ---Support register---
const supportPath = path.join(__dirname, 'commands/support');
const supportFiles = fs.readdirSync(supportPath).filter(file => file.endsWith('.js'));

for (file of supportFiles) {
	const filePath = path.join(supportPath, file);
	const support = require(filePath);

	commands.push(support.data.toJSON())
}
//----------

// Road map
const rest = new REST({ version: '10'}).setToken(token);
//----------

// Send commands
(async () => {
	try {
		console.log('Sarted refreshing application (/) commands.');

		await rest.put(Routes.applicationGuildCommands(clientID, guildID), {body: commands});

		console.log('Successfully reloaded application (/) commands.');
	} catch(err) {
		console.log(err);
	}
})();
//----------