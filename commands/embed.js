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

		const embed =  new EmbedBuilder()
		.setColor(0x0099FF)
		.setTitle('Some title')
		.setURL('https://discord.js.org/')
		.setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
		.setDescription('Some description here')
		.setThumbnail('https://i.imgur.com/AfFp7pu.png')
		.addFields(
			{ name: 'Regular field title', value: 'Some value here' },
			{ name: '\u200B', value: '\u200B' },
			{ name: 'Inline field title', value: 'Some value here', inline: true },
			{ name: 'Inline field title', value: 'Some value here', inline: true },
		)
		.addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
		.setImage('https://i.imgur.com/AfFp7pu.png')
		.setTimestamp()
		.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
	
			

		await interaction.reply({ content: 'Embed!', embeds: [embed], components: [row]});

	}
}