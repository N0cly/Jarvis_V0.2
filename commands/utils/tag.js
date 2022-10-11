const { SlashCommandBuilder} = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
	.setName('tag')
	.setDescription('Replies with autocomplete')
	.addStringOption(option =>
		option.setName('autocomplete')
		.setDescription('Enter your choice')
		.setAutocomplete(true)
		.setRequired(true)),
	//.setDMPermission(true),
	async execute(interaction) {
		const value = interaction.options.getString('autocomplete')
		console.log('//////////')
		console.log(value)
		console.log('//////////')
		interaction.reply(value)
	}
} 