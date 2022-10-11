const { SlashCommandBuilder, ActionRowBuilder, SelectMenuBuilder} = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
	.setName('multi-menus')
	.setDescription('Replies with Milti-menus')
	.setDMPermission(true),
	async execute(interaction) {
		
		const row = new ActionRowBuilder()
			.addComponents(
				new SelectMenuBuilder()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')
					.setMinValues(2)
					.setMaxValues(3)
					.addOptions([
						{
							label: 'Select me',
							description: 'This is a description',
							value: 'first_option',
						},
						{
							label: 'You can select me too',
							description: 'This is also a description',
							value: 'second_option',
						},
						{
							label: 'I am also an option',
							description: 'This is a description as well',
							value: 'third_option',
						},
					]),
			);

		await interaction.reply({ content: 'Multi-menus !!', ephemeral: true, components: [row] });
	
	}
} 