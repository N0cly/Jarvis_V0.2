const { SlashCommandBuilder} = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
	.setName('multi-tags')
	.setDescription('Replies with handel autocomplete')
	.addStringOption(option =>
		option.setName('autocomplete')
		.setDescription('Enter your choice')
		.setAutocomplete(true)
		.setRequired(true)),
	//.setDMPermission(true),
	async execute(interaction) {
		
		console.log('//////////')
		console.log(interaction.options.getString('autocomplete'))
		console.log('//////////')
	}
} 