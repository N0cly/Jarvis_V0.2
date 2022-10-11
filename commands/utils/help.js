const { SlashCommandBuilder, ActionRowBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle} = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const ping = require('../utils/ping')

module.exports = {
	data: new SlashCommandBuilder()
	.setName('help')
	.setDescription('Replies with help')
	.setDMPermission(true),
	async execute(interaction) {

		const utilsPath = path.join(__dirname, './');
		const utilsFiles = fs.readdirSync(utilsPath).filter(file => file.endsWith('.js'));
		
		const row = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
			.setCustomId('primary')
			.setLabel('Primary')
			.setStyle(ButtonStyle.Primary)
		);

		const embed = new EmbedBuilder()
		.setColor('#0face1')
		.setTitle('Some title')
		.setURL('https://twitter.com/N0cly')
		.setDescription('Some description here')
				
		for (file of utilsFiles) {
			const filePath = path.join(utilsPath, file);
			const utils = require(filePath);

			embed.addFields({name: utils.data.name, value: utils.data.description, inline: false})
		}



		const message = interaction.reply({ content: 'Embed!', embeds: [embed], components: [row], fetchReply: true});
		//message.react('😅')
		//.then(function (message){
		//	message.react('😅')
		//}).catch(function(err) {
		//	console.log(err)
		//});

		
	}
} 