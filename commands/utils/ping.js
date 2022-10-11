const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle} = require('discord.js');
const { get } = require('node:http');
const wait = require('node:timers/promises').setTimeout;
const fs = require('fs');

module.exports = {
	data: new SlashCommandBuilder()
	.setName('ping')
	.setDescription('Replies with pong!!!!!!')
	.setDMPermission(true),
	async execute(interaction) {
		//await interaction.reply("Pong!");
		
//--------------------
		//var stat = require('../data/slashCounter.json');
		//var ping = JSON.parse(stat.ping);
		//let statPing = 1
		//let data = JSON.stringify(statPing)
		//console.log(ping);

		//if (stat.ping == undefined) {
		//	console.log('false')
		//} else {
		//	statPing += ping
		//	fs.writeFile("C:\\Users\\Ninja\\Documents\\01.Programme\\JS\\Jarvis_V0.2\\data\\slashCounter.json", data, function(err){
		//		if(err){
		//			console.log(err)
		//		}
		//	})
		//}
//-------------------------
		//await interaction.followUp('Pong again!');
		//await interaction.followUp({ content: 'Pong again!', ephemeral: true });
		
		//await wait(4000);
		//await interaction.deleteReply();

		//await interaction.deferReply();
		//await wait(4000);
		//await interaction.editReply('Pong!');

		//const message = await interaction.fetchReply();
		//console.log(message);
	}
} 