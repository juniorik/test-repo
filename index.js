const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ping Pong Bot Loaded!');
});

client.on('message', message => {
	if (message.content === 'Ping') {
		message.channel.send('Pong!');
	}
});

client.login('ODE1NjY4NTM0NTc5Mjk4Mzc0.YDvwhQ._N6p1H1W18sGqmbicuGzepMEpWg');