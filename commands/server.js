const { SlashCommandBuilder, PermissionFlagsBits} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
				.setName('server')
				.setDescription('Replies with server data')
				.setDMPermission(false)
				.setDefaultMemberPermissions(PermissionFlagsBits.KickMembers | PermissionFlagsBits.BanMembers),
	async execute(interaction) {
		await interaction.reply(`Server name: ${interaction.guild.name} \nTotal members: ${interaction.guild.memberCount}`)
	}
}