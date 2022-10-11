const { SlashCommandBuilder, ActionRowBuilder, SelectMenuBuilder, EmbedBuilder, SelectMenuInteraction} = require('discord.js');
const wait = require('node:timers/promises').setTimeout;



module.exports = {
	data: new SlashCommandBuilder()
	.setName('menu')
	.setDescription('Replies with menu')
	.setDMPermission(true),
	async execute(interaction) {

		const row = new ActionRowBuilder()
		.addComponents(
			new SelectMenuBuilder()
			.setCustomId('select')
			.setPlaceholder('Nothing selected')
			.addOptions([
				{
					label: 'Select me',
					description: 'This is a description',
					value: 'first_option',
				},
				{
					label: 'You can select me too',
					description: ' This is also a description',
					value: 'second_option',
				},
			]),
		);

		const embed = new EmbedBuilder()
		.setColor(0x0099FF)
		.setTitle('Some Title')
		.setURL('https://twitter.com/N0cly')
		.setDescription('Some description here');

		//console.log(interaction);

		

		await interaction.reply({ content: 'This is a Menu', ephemeral: true, embeds: [embed], components: [row] });

		const message = await interaction.fetchReply();
		console.log('//////////')
		console.log(message)
		console.log('//////////')
		console.log(interaction.customId)

		if (interaction.customId === 'select') {
			await interaction.update({ content: 'Something was selected', components: [] })
			
		}
		
		

	}
};