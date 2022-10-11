const { ActivityType } = require("discord.js");

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		//client.user.setPresence({ activities: [{name: "with discord.js"}], status: 'idle' });
		client.user.setStatus('idle');
		client.user.setActivity('discord.js', { type: ActivityType.Watching});
		
	},
};