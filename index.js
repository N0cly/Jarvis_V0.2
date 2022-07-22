// Variable
const { Client, GatewayIntentBits, Collection} = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds]});
const { token} = require("./data/config.json");
const fs = require('node:fs');
const path = require('node:path');

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandsFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandsFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);

	client.commands.set(command.data.name, command);
}

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag} !`);
});

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

	//const {commandName} = interaction;

	//if(commandName === "ping") {
	//	await interaction.reply('Pong');
	//} else if (commandName === 'server') {
	//	await interaction.reply(`Server name: ${interaction.guild.name} \nTotal members: ${interaction.guild.memberCount}`)
	//}
});


client.login(token);