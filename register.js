const fs = require('node:fs');
const path = require('node:path');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');
const { token, clientID, guildID, guildJarvis } = require('./data/config.json')

const commands = []
const commandsPath = path.join(__dirname, 'commands');
const commandsFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (file of commandsFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	commands.push(command.data.toJSON())
}

const rest = new REST({ version: '10'}).setToken(token);

(async () => {
	try {
		console.log('Sarted refreshing application (/) commands.');

		await rest.put(Routes.applicationGuildCommands(clientID, guildID), {body: commands});

		console.log('Successfully reloaded application (/) commands.');
	} catch(err) {
		console.log(err);
	}
})();