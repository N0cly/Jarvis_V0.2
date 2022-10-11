// Init
const { Client, GatewayIntentBits, Collection} = require('discord.js');
const { token} = require("./data/config.json");
const fs = require('node:fs');
const path = require('node:path');
const mongoose = require('mongoose')
const { DB_URI } = require('./data/mgdb.json')
//----------

// NEW Client with Intents
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions]});
//----------



// ALL COMMANDS
client.commands = new Collection();

// ---Commands recovery---
const commandsPath = path.join(__dirname, 'commands');
const commandsFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandsFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);

	client.commands.set(command.data.name, command);
}

// ---Admin recovery---
const adminPath = path.join(__dirname, 'commands/admin');
const adminFiles = fs.readdirSync(adminPath).filter(file => file.endsWith('.js'));

for (const file of adminFiles) {
	const filePath = path.join(adminPath, file);
	const admin = require(filePath);

	client.commands.set(admin.data.name, admin);
}

// ---Utils recovery---
const utilsPath = path.join(__dirname, 'commands/utils');
const utilsFiles = fs.readdirSync(utilsPath).filter(file => file.endsWith('.js'));

for (const file of utilsFiles) {
	const filePath = path.join(utilsPath, file);
	const utils = require(filePath);

	client.commands.set(utils.data.name, utils);
}

// ---Stats recovery---
const statsPath = path.join(__dirname, 'commands/stats');
const statsFiles = fs.readdirSync(statsPath).filter(file => file.endsWith('.js'));

for (const file of statsFiles) {
	const filePath = path.join(statsPath, file);
	const stats = require(filePath);

	client.commands.set(stats.data.name, stats);
}

// ---Moderations recovery---
const moderationsPath = path.join(__dirname, 'commands/moderations');
const moderationsFiles = fs.readdirSync(moderationsPath).filter(file => file.endsWith('.js'));

for (const file of moderationsFiles) {
	const filePath = path.join(moderationsPath, file);
	const moderations = require(filePath);

	client.commands.set(moderations.data.name, moderations);
}
// ---Support recovery---
const supportPath = path.join(__dirname, 'commands/support');
const supportFiles = fs.readdirSync(supportPath).filter(file => file.endsWith('.js'));

for (const file of supportFiles) {
	const filePath = path.join(supportPath, file);
	const support = require(filePath);

	client.commands.set(support.data.name, support);
}


//----------
//console.log(client.commands)

//Events recovery
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
//----------

// NEW interaction
client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = client.commands.get(interaction.commandName);
	
	

	if (!command) return;
	
	if (interaction.commandName === 'ping') {
		await interaction.reply(`Websocket heartbeat: ${client.ws.ping}ms.`);
	}
	try {
		await command.execute(interaction);
	} catch (err) {
		console.log(err);
		await interaction.reply({content:'There was an error while executing this command!', ephemeral: true });
	}

})
//----------

// MGDB
mongoose.connect(DB_URI, {
	autoIndex: false, //Don't build indexes
	maxPoolSize: 10, // Maintain up to 10 socket connections
	serverSelectionTimeoutMS: 5000, // Keep trying to send operation for 5 seconds
	socketTimeoutMS: 45000, // Close socket after 45 seconds of inactivity
	family: 4 // Use IPv4, skip trying IPv6
}).then(() => {console.log('Client MGDB connected')}).catch(err => { console.log(err)})
//----------

// Bot login
client.login(token);