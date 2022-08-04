const { SlashCommandBuilder,ActionRowBuilder,ButtonBuilder,ButtonStyle, EmbedBuilder} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
	.setName('embed')
	.setDescription('send a embed')
	.setDMPermission(true),
	async execute(interaction) {

		const row = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
			.setCustomId('primary')
			.setLabel('Primary')
			.setStyle(ButtonStyle.Primary)
		);

		const embed = new EmbedBuilder()
		.setColor(0x0099FF)
		.setTitle('Some title')
		.setURL('https://twitter.com/N0cly')
		.setDescription('Some description here')
			

		await interaction.reply({ content: 'Embed!', embeds: [embed], components: [row]});

	}
}