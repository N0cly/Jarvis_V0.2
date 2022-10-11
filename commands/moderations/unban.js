const { SlashCommandBuilder, PermissionFlagsBits} = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
	.setName('unban')
	.setDescription('Select a member and unban them.')
	.addUserOption(option =>
		option.setName('target').setDescription('The member to ban')
		.setRequired(true))
	.setDefaultMemberPermissions(PermissionFlagsBits.KickMembers | PermissionFlagsBits.BanMembers),
	async execute(interaction) {
		
		
		const id = interaction.options.get('target')?.value;
		const name = interaction.options.getUser('target')
		console.log(name)
		console.log("////")
		console.log(interaction.guild.bans.cache.get(id))
		console.log("////")
        
        try {
            interaction.guild.members.unban(id)
            await interaction.reply(`${name} has been successfully unbanned !`)
            
        } catch (err) {
            await interaction.reply('An error has occured, impossible to unban the user !')
			console.log(err)
        } 

		//interaction.guild.members.ban(user).catch(err => {
		//	if (err.code == 10026) {
		//		interaction.reply({ content: 'This user is not ban from this server ', ephemeral: true})
		//	} else {
		//		interaction.reply({ content: 'An error has occured, impossible to unban the user !', ephemeral: true})	
		//	}
		//	
		//})
		
	}
}