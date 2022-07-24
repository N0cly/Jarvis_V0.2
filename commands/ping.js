const { SlashCommandBuilder} = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
	.setName('ping')
	.setDescription('Replies with pong!!!!!!'),
	async execute(interaction) {
		await interaction.reply("Pong!");
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