const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');
const { token, clientID, guildID } = require('./data/config.json')

const commands = [
	{
		name: 'ping',
		description: 'Replies with pooooooong!',
	},
];

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