const { SlashCommandBuilder, PermissionFlagsBits} = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
	.setName('ban')
	.setDescription('Select a member and ban them (but not really).')
	.addUserOption(option =>
		option.setName('target').setDescription('The member to ban'))
	.setDefaultMemberPermissions(PermissionFlagsBits.KickMembers | PermissionFlagsBits.BanMembers),
	async execute(interaction) {
		//await interaction.deferReply();
		await interaction.reply("Command working...");
		await wait(3000);
		await interaction.editReply('test stop')
		await wait(2000);
		await interaction.deleteReply()

		
	}
}