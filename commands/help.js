const fs = require('fs')

module.exports = {
	name: 'help',
	description: 'List all available commands.',
	execute(message) {
		let str = '';
		const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

		for (const file of commandFiles) {
			const command = require(`./${file}`);
			str += `Command Name: $${command.name} ==> ${command.description} \n`;
		}
		str +=  "\n`" + "-AVEY by Naman [Music Bot]" + "`"
		message.channel.send(str);
	},
};