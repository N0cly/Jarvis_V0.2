const {InteractionType, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder} = require('discord.js')

module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		//if (!interaction.isChatInputCommand()) return;
		//if (!interaction.isButton()) return;
		//if (!interaction.isSelectMenu()) return;
		
		console.log('-------------------')
		console.log(interaction)
		console.log('-------------------')
		//console.log(`${interaction.user.tag} in server "${interaction.guild.name}" in channel *#${interaction.channel.name}* with **${interaction.commandName}** command`)

		
		
		// RESPONDING SELECT MENUS // 
		if (interaction.customId === 'select') {
			interaction.update({ content: 'Something was selected', components: [] })
			
		};


		// RESPONDING AUTOCOMPLETE
		if (interaction.commandName === 'tag') {
			if (interaction.type !== InteractionType.ApplicationCommandAutocomplete) return;

			const focusedValue = interaction.options.getFocused();
			const choices = ['faq', 'install', 'collection', 'promise', 'debug'];
			const filtered = choices.filter(choice => choice.startsWith(focusedValue));

			interaction.respond(
				filtered.map(choice => ({ name: choice, value: choice })),
			
			);
	
		};


		
		if (interaction.commandName === 'multi-tags') {
			if (interaction.type !== InteractionType.ApplicationCommandAutocomplete) return;
			
			const focusedOption = interaction.options.getFocused(true);
			let choices = [ focusedOption.value, 'lol']

			if (focusedOption.name === 'name') {
			choices = ['faq', 'install', 'collection', 'promise', 'debug'];
			}

			if (focusedOption.name === 'theme') {
			choices = ['halloween', 'christmas', 'summer'];
			}

			const filtered = choices.filter(choice => choice.startsWith(focusedOption.value));
			interaction.respond(
				filtered.map(choice => ({ name: choice, value: choice }))
			);
		}

		// RESPONDING MODALS

		if (interaction.commandName === 'modal') {
			const modal = new ModalBuilder()
			.setCustomId('myModal')
			.setTitle('My Modal')

			// Add components to modal

			// Create the text input components
			const favoriteColorInput = new TextInputBuilder()
			.setCustomId('favoriteColorInput')
			// the label is the prompt the user sees for this input
			.setLabel("What's your favorite color ?")
			// Short means only a single line of text
			.setStyle(TextInputStyle.Short);

			const hobbiesInput = new TextInputBuilder()
			.setCustomId('hobbiesInput')
			.setLabel("What's some of your favorite hobbies ?")
			// Paragraph means multiple lines of text 
			.setStyle(TextInputStyle.Paragraph);

			// An action row only holds one text input,
			//so you need one action row per text input.
			const firstActionRow = new ActionRowBuilder().addComponents(favoriteColorInput);
			const secondActionRow = new ActionRowBuilder().addComponents(hobbiesInput);

			modal.addComponents(firstActionRow, secondActionRow);

			interaction.showModal(modal)
		}

		if (interaction.customId === 'myModal') {
			if (interaction.type !== InteractionType.ModalSubmit) return;

			const favoriteColor = interaction.fields.getTextInputValue('favoriteColorInput');
			const hobbies = interaction.fields.getTextInputValue('hobbiesInput');
			console.log({ favoriteColor, hobbies });

			interaction.reply({ content: 'Your submission was received successfully !'})

			
		}

		
	},
};