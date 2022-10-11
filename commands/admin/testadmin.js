const { SlashCommandBuilder} = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
	.setName('testadmin')
	.setDescription('Test admin handler')
	.setDMPermission(true),
	async execute(interaction) {
		await interaction.reply({ content:'Successful Test', ephemeral: true})
	}
} 