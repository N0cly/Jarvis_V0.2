const { SlashCommandBuilder} = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
	.setName('modal')
	.setDescription('Replies with modal')
	.setDMPermission(true),
	async execute(interaction) {
		//await interaction.reply({ content: 'Successful test utils', ephemeral: true })
	}
} 