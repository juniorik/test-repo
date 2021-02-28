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

client.login('NzY3ODE1MTcwMDA4Njc4NDAy.X43ZmQ.73ZQGYd9aQOhLaDFfkc2_lTU6xo');