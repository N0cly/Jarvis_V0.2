module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		if (!interaction.isChatInputCommand()) return;

		console.log(interaction)
		//console.log(`${interaction.user.tag} in server "${interaction.guild.name}" in channel *#${interaction.channel.name}* with **${interaction.commandName}** command`)
	},
};