const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle} = require('discord.js');
const { get } = require('node:http');
const wait = require('node:timers/promises').setTimeout;
const fs = require('fs');

module.exports = {
	data: new SlashCommandBuilder()
	.setName('button')
	.setDescription('Replies with all buttons')
	.setDMPermission(true),
	async execute(interaction) {
		//await interaction.reply("Pong!");

		const row = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
			.setCustomId('Primary')
			.setLabel('Primary')
			.setStyle(ButtonStyle.Primary)
			//.setEmoji('862056141071712286'),
			//.setDisabled(true)
		)
		
		.addComponents(
			new ButtonBuilder()
			.setCustomId('Secondary')
			.setLabel('Secondary')
			.setStyle(ButtonStyle.Secondary)
			//.setEmoji('862056141071712286'),
			//.setDisabled(true)
		)
		.addComponents(
			new ButtonBuilder()
			.setCustomId('Success')
			.setLabel('Success')
			.setStyle(ButtonStyle.Success)
			//.setEmoji('862056141071712286'),
			//.setDisabled(true)
		)
		.addComponents(
			new ButtonBuilder()
			.setCustomId('Danger')
			.setLabel('Danger')
			.setStyle(ButtonStyle.Danger)
			//.setEmoji('862056141071712286'),
			//.setDisabled(true)
		)
		.addComponents(
			new ButtonBuilder()
			.setLabel('Link')
			.setStyle(ButtonStyle.Link)
			.setURL('https://twitter.com/N0cly')
			//.setEmoji('862056141071712286'),
			//.setDisabled(true)
		);
		

		//const filter = i => i.customId === 'primary' && i.user.id === '402521268781580308';

		//	const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });

		//collector.on('collect', async i => {
		//	await i.update({ content: 'A button was clicked!', components: [] });
		//});

		//collector.on('end', collected => console.log(`Collected ${collected.size} items`));

		await interaction.reply({ content: 'ALL buttons', components: [row]});
	}
} 