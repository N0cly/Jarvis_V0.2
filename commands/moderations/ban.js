const { SlashCommandBuilder, PermissionFlagsBits, SystemChannelFlagsBitField} = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
	.setName('ban')
	.setDescription('Select a member and ban them')
	.addUserOption(option =>
		option.setName('target')
		.setDescription('The member to ban')
		.setRequired(true))

	.addStringOption(option => 
		option.setName('reason')
		.setDescription('Reason for ban')
		.setRequired(true))
		
		.setDefaultMemberPermissions(PermissionFlagsBits.KickMembers | PermissionFlagsBits.BanMembers),
		async execute(interaction) {
			
			
			const user = interaction.options.getUser('target');
			
			const member = interaction.guild.members.cache.get(user.id) || await interaction.guild.members.fetch(user.id).catch(err => { })
			const reason = interaction.options.getString('reason');
			const admin = interaction.user.tag;

		//if(interaction.user.id == user) {
		//	interaction.reply({ content: 'You are a little joker ;)', ephemeral: true})
		//	return
		//}
		//
		//interaction.guild.members.ban(user).catch(err => {
		//	if(interaction.user.id !== user) {
		//		if(user !== 513804079474933763) {
		//			interaction.reply(`${user} has been successfully banned !`)
		//			return
		//		}
		//		
		//	}
		//	if (user == 513804079474933763) {
		//		interaction.reply({ content: 'You cannot ban me!', ephemeral: true})
		//		//console.log(err)
		//		return
		//	}
		//	if (err.code == 50013) {
		//		interaction.reply({ content: 'You did not have permission to ban this user :/ \n Because you have the same role or this user has a higher role than you !', ephemeral: //true})
		//		//console.log(err)
		//		return
		//	} 
		//	if (err.code !== 50013) {
		//		interaction.reply({ content: 'An error has occured, impossible to ban the user !', ephemeral: true})	
		//		return
		//		//console.log('////err.code !== 50013////')
		//	}
		//})
		await interaction.deferReply();
		interaction.guild.members.ban(user).catch(err => {
			if(interaction.user.id == user) {
				interaction.editReply({ content: 'You are a little joker ;)', ephemeral: true})
				return
			} else {
				if(user == 513804079474933763) {
					interaction.editReply({ content: 'You cannot ban me!', ephemeral: true})
					wait(5000)
					return
				} else {
					if (err.code == 50013) {
						interaction.editReply({ content: 'You did not have permission to ban this user :/ \n Because you have the same role or this user has a higher role than you !', ephemeral: true})
					}
				}
				
			}
		})
		
		interaction.editReply({content: `${user}` + " has been successfully banned for " + "``"+ reason+ " | "+ admin + "``" +" !"})
		


		//switch (member.id) {
		//	case (!member):
		//		return interaction.reply({ content: "ERROR: Cannot find this user!", ephemeral: true })
//
		//	case (interaction.member.id):
		//		return interaction.reply({ content: "ERROR: You cannot ban yourself!", ephemeral: true })
		//	
		//	case (513804079474933763):
		//		return interaction.reply({ content: "ERROR: You cannot ban me!", ephemeral: true })
//
		//	case (member.roles.highest.position >= interaction.member.roles.highest.position):
		//		return interaction.reply({ content: "ERROR: I can't ban this user, because he's higher than you!", ephemeral: true })
//
		//	
//
		//	case (!member.bannable):
		//		return interaction.reply({ content: "ERROR: I can't ban this user"})
//
		//	default:
//
		//		await interaction.reply({ content: user + " has been banned from the server for ``" + reason + "``", ephemeral: true })
//
		//		await member.ban({ reason: [reason + " | " + admin] });
		//		break;
//
		//} 
		
	}
}  