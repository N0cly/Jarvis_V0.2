// Variable
const { Client, GatewayIntentBits, Collection} = require('discord.js');
const { token} = require("./data/config.json");
const fs = require('node:fs');
const path = require('node:path');


const client = new Client({ intents: [GatewayIntentBits.Guilds]});

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandsFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandsFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);

	client.commands.set(command.data.name, command);
}

const eventsPath = path.join(__dirname, 'events');
const eventsFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventsFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if(event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = client.commands.get(interaction.commandName);
	
	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (err) {
		console.log(err);
		await interaction.reply({content:'There was an error while executing this command!', ephemeral: true });
	}

});


client.login(token);