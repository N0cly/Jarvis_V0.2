const { SlashCommandBuilder} = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
	.setName('testutils')
	.setDescription('Replies with testutils')
	.setDMPermission(true),
	async execute(interaction) {
		await interaction.reply({ content: 'Successful test utils', ephemeral: true })
	}
} 